/**
 * It fetches a list of repos for a given username and returns the response as JSON
 * @param username - The username of the user whose repos we want to fetch.
 * @returns An array of objects.
 */
export const fetchRepos = async (username) => {
  return fetch(
    `https://api.github.com/users/${username}/repos`,
  ).then((response) => response.json());
};
