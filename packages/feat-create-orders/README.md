# @storybooknx/feat-create-orders

This library was generated with [Nx](https://nx.dev).

## Storybook Development

This library uses **Nx Workspace Watching** to provide a seamless Storybook development experience with automatic dependency rebuilding.

### Running Storybook

```sh
nx storybook @storybooknx/feat-create-orders
```

This command will:

1. Build all dependent libraries (like `@storybooknx/ui`)
2. Start Storybook
3. Watch for changes in dependent libraries and automatically rebuild them

### How Workspace Watching Works

The `package.json` configures three interconnected targets:

- **`storybook`**: Depends on `^build` (builds all dependencies) and `watch-deps` (starts watching)
- **`build-deps`**: A no-op target that ensures all dependencies are built via `^build`
- **`watch-deps`**: A continuous task that monitors this project and its dependencies for changes

```json
{
  "nx": {
    "targets": {
      "storybook": {
        "dependsOn": ["^build", "watch-deps"]
      },
      "watch-deps": {
        "continuous": true,
        "executor": "nx:run-commands",
        "options": {
          "command": "pnpm exec nx watch --projects @storybooknx/feat-create-orders --includeDependentProjects -- pnpm exec nx build-deps @storybooknx/feat-create-orders"
        }
      }
    }
  }
}
```

### Benefits

✨ **No Manual Rebuilds**: Change code in `@storybooknx/ui` and see it instantly in Storybook  
✨ **Automatic Detection**: Nx watches all dependencies in the project graph  
✨ **Efficient**: Only rebuilds what changed

### Learn More

- [Nx Workspace Watching Documentation](https://nx.dev/docs/guides/tasks--caching/workspace-watching)
- [Nx Task Dependencies](https://nx.dev/concepts/task-pipeline-configuration)

## Running unit tests

Run `nx test @storybooknx/feat-create-orders` to execute the unit tests via [Jest](https://jestjs.io).
