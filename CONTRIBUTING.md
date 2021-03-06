# Contributing to Git o Get 💥

**Pull Request Guidelines**

1. [Fork][fork-link] the repository [react-github-embed](https://github.com/Mridul2820/react-github-embed).
2. [Clone][clone-link] your new fork of the repository locally.

```
git clone https://github.com/<your-github-username>/react-github-embed
```

3. Set upstream command

```
git remote add upstream https://github.com/Mridul2820/react-github-embed.git
```

4. Navigate to the new project directory:

```
cd git-o-get
```

5. Create Your own [branch][branch-link]

```
git checkout -b <YOUR_BRANCH_NAME>
```

6. Run it Locally

- Clone the respository locally

```
git clone https://github.com/Mridul2820/react-github-embed.git
```

- Create a `.env` file in the root directory

```
REACT_APP_GITHUB_TOKEN = <YOUR_GITHUB_TOKEN>
```

- **`REACT_APP_GITHUB_TOKEN`: Get your `Personal Access Token` by signing in to your github account and then go to your setting -> developer setting -> Personal access tokens -> Generate new token**

- Install the `node_modules`

```
npm install
or
npm i
```

- Start the Server

```
npm start
```

7. Add your changes

```
git add .
```

8. Commit your changes with a meaningful message

```
git checkout -m "<Your Message>"
```

9. Push your local commits to the remote repository

```
git push origin <YOUR_BRANCH_NAME>
```

10. Create a[ Pull request](pull-request)
11. **Congratulations!** You've made your **first contribution!** 🙌🏼

[repo-link]: https://github.com/Mridul2820/git-o-get/fork
[branch-link]: http://guides.github.com/introduction/flow/
[clone-link]: https://help.github.com/articles/cloning-a-repository/
[fork-link]: http://guides.github.com/activities/forking/
[syncing-link]: https://help.github.com/articles/syncing-a-fork
[pull-request]: https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request/
