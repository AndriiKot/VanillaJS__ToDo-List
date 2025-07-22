if (process.env.SKIP_PREPARE !== 'true') {
  import('./git/setGitHooks.js').then(({ setGitHooks }) => setGitHooks());
  import('./generateJsConfig.js').then(({ generateJsConfig }) => generateJsConfig());
}
