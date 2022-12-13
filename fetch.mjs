#! /usr/bin/env  zx

const fs = require("fs")

$.verbose = false

while (true) {
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
        },
        body: JSON.stringify({
            query: `{
            user(login: "guchii") {
                websiteUrl
                bio
                pinnedItems(first: 6, types: REPOSITORY) {
                    nodes {
                        ... on Repository {
                            name
                            description
                            url
                            homepageUrl
                            createdAt
                            updatedAt
                        }
                    }
                }
            }
        }`})
    });

    const data = await response.json()

    if (!!data.data && data.data.user.pinnedItems.nodes.length !== 0) {
        const final = { updated_at: new Date().toISOString(), projects: data.data.user.pinnedItems.nodes }
        fs.writeFileSync("projects.json", JSON.stringify(final, null, 2))
    }
    await $`sleep 36000`
}