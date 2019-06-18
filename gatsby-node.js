const fetch = require("node-fetch")
const queryString = require("query-string")

const API_URL = formid =>
  `https://formspree.io/api/0/forms/${formid}/submissions`
const AUTH_HEADER = apikey => `Bearer ${apikey}`

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  // Helper function that converts data into Gatsby's node structure
  const makeNodeFactory = (type, idFn) => data => {
    const nodeId = createNodeId(`${type}-${idFn(data)}`)
    const nodeContent = JSON.stringify(data)
    const nodeData = Object.assign({}, data, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: type,
        content: nodeContent,
        contentDigest: createContentDigest(data),
      },
    })
    return nodeData
  }
  const Submission = makeNodeFactory("FormspreeSubmission", sub => sub._date)
  const Field = makeNodeFactory("FormspreeField", field => field)

  return fetch(API_URL(configOptions.form), {
    headers: { Authorization: AUTH_HEADER(configOptions.key) },
  })
    .then(response => response.json())
    .then(data => {
      data.fields.forEach(field => {
        createNode(Field({ name: field }))
      })
      data.submissions.forEach(sub => {
        createNode(Submission(sub))
      })
    })
}
