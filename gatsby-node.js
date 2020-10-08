const axios = require("axios")
const crypto = require("crypto")

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const noticedummy = {
    id: "dummy",
    title: "",
    timestamp: 1598791602278,
    important: "",
    attachments: [{ caption: "", url: "" }],
  }
  const noticedummyContent = JSON.stringify(noticedummy)
  const noticedummyMeta = {
    id: createNodeId("Notice-dummy"),
    endpointId: "dummy",
    parent: null,
    children: [],
    internal: {
      type: "Notice",
      content: noticedummyContent,
      contentDigest: createContentDigest(noticedummy),
    },
  }
  const noticedummynode = Object.assign({}, noticedummy, noticedummyMeta)
  createNode(noticedummynode)
  const eventdummy = {
    id: "dummy",
    title: "",
    timestamp: 1598791602278,
    attachments: [{ caption: "", url: "" }],
  }
  const eventdummyContent = JSON.stringify(eventdummy)
  const eventdummyMeta = {
    id: createNodeId("Event-dummy"),
    endpointId: "dummy",
    parent: null,
    children: [],
    internal: {
      type: "Event",
      content: eventdummyContent,
      contentDigest: createContentDigest(eventdummy),
    },
  }
  const eventdummynode = Object.assign({}, eventdummy, eventdummyMeta)
  createNode(eventdummynode)
  const fetchNotice = () => {
    axios
      .get(`https://nitpadmin.herokuapp.com/api/notice`)
      .then(res => {
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
      })
      .catch(e => console.log(e))
  }
  const fetchEvents = () => {
    axios.get(`https://nitpadmin.herokuapp.com/api/event`).then(res => {
      // map into these results and create nodes
      res.data.map((events, i) => {
        // Create your node object
        const eventNode = {
          // Required fields
          id: `${i}`,
          parent: `__SOURCE__`,
          internal: {
            type: `Event`, // name of the graphQL query --> allRandomUser {}
            // contentDigest will be added just after
            // but it is required
          },
          children: [],

          // Other fields that you want to query with graphQl
          title: events.title,
          timestamp: events.timestamp,
          attachments: events.attachments,
          // etc...
        }

        // Get content digest of node. (Required field)
        const contentDigest = crypto
          .createHash(`md5`)
          .update(JSON.stringify(eventNode))
          .digest(`hex`)
        // add it to userNode
        eventNode.internal.contentDigest = contentDigest

        // Create node with the gatsby createNode() API
        createNode(eventNode)
      })
    }).catch(e=>console.log(e))
  }
  return Promise.all([fetchNotice(), fetchEvents()])
}
