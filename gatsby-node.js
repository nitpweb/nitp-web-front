const axios = require("axios")
const crypto = require("crypto")

// exports.sourceNodes = async ({ boundActionCreators }) => {
exports.sourceNodes = ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators
  return new Promise((resolve, reject) => {
    // fetch raw data from the randomuser api
    // const fetchRandomUser = () => axios.get(`https://randomuser.me/api/?results=500`);
    // await for results
    // const res = await fetchRandomUser();

    axios.get(`https://nitpadmin.herokuapp.com/api/notice`).then(res => {
      // map into these results and create nodes
      res.data.map((notice, i) => {
        // Create your node object
        const noticeNode = {
          // Required fields
          id: `${i}`,
          parent: `__SOURCE__`,
          internal: {
            type: `Notice`, // name of the graphQL query --> allRandomUser {}
            // contentDigest will be added just after
            // but it is required
          },
          children: [],

          // Other fields that you want to query with graphQl
          title: notice.title,
          timestamp: notice.timestamp,
          openDate: notice.openDate,
          closeDate: notice.closeDate,
          important: notice.important,
          attachments: notice.attachments,
          // etc...
        }

        // Get content digest of node. (Required field)
        const contentDigest = crypto
          .createHash(`md5`)
          .update(JSON.stringify(noticeNode))
          .digest(`hex`)
        // add it to userNode
        noticeNode.internal.contentDigest = contentDigest

        // Create node with the gatsby createNode() API
        createNode(noticeNode)
      })
      resolve()
    })
  })
}
