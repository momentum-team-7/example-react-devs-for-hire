import { env } from './env.js'
import axios from 'axios'

const URL = 'https://api.github.com/orgs/momentum-team-9/members'

export const getGitHubOrgMemberData = () => {
  return axios(URL, {
    headers: {
      Authorization: `token ${env['GITHUB_ACCESS_TOKEN']}`,
    },
  })
}
