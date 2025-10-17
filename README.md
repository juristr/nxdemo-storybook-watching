# Storybooknx

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Storybook Development with Workspace Watching

This workspace leverages **Nx Workspace Watching** to automatically rebuild dependent libraries when developing Storybook components. This ensures that your Storybook always reflects the latest changes from library dependencies without manual rebuilds.

### How it works

When you run Storybook for a project like `@storybooknx/feat-create-orders`:

```sh
npx nx storybook @storybooknx/feat-create-orders
```

The following happens automatically:

1. **Initial Build**: All dependent libraries (like `@storybooknx/ui`) are built first via the `^build` dependency
2. **Watch Mode**: The `watch-deps` target starts monitoring all dependent projects for changes
3. **Auto-Rebuild**: When you modify a dependency, Nx automatically rebuilds it and Storybook hot-reloads with the changes

### Configuration

The workspace watching is configured in each library's `package.json`:

```json
{
  "nx": {
    "targets": {
      "storybook": {
        "dependsOn": ["^build", "watch-deps"]
      },
      "watch-deps": {
        "continuous": true,
        "dependsOn": ["build-deps"],
        "executor": "nx:run-commands",
        "options": {
          "command": "pnpm exec nx watch --projects @storybooknx/feat-create-orders --includeDependentProjects -- pnpm exec nx build-deps @storybooknx/feat-create-orders"
        }
      }
    }
  }
}
```

This setup:

- Uses `nx watch` with `--includeDependentProjects` to monitor the project and its dependencies
- Automatically triggers rebuilds when files change
- Runs continuously in parallel with Storybook

### Learn More

- [Nx Workspace Watching Documentation](https://nx.dev/docs/guides/tasks--caching/workspace-watching)
- [Nx Task Pipeline](https://nx.dev/concepts/task-pipeline-configuration)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
