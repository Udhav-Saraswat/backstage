# @backstage/backend-app-api

## 0.4.3-next.0

### Patch Changes

- cf13b482f9e: Switch `configServiceFactory` to use `ConfigSources` from `@backstage/config-loader` to load config.
- Updated dependencies
  - @backstage/backend-common@0.18.5-next.0
  - @backstage/config-loader@1.3.0-next.0
  - @backstage/plugin-permission-node@0.7.8-next.0
  - @backstage/backend-tasks@0.5.2-next.0
  - @backstage/plugin-auth-node@0.2.14-next.0
  - @backstage/backend-plugin-api@0.5.2-next.0
  - @backstage/cli-common@0.1.12
  - @backstage/config@1.0.7
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2

## 0.4.2

### Patch Changes

- 5c7ce585824: Allow an additionalConfig to be provided to loadBackendConfig that fetches config values during runtime.
- 8cce2205a39: Register unhandled rejection and uncaught exception handlers to avoid backend crashes.
- Updated dependencies
  - @backstage/backend-common@0.18.4
  - @backstage/config-loader@1.2.0
  - @backstage/plugin-permission-node@0.7.7
  - @backstage/backend-tasks@0.5.1
  - @backstage/plugin-auth-node@0.2.13
  - @backstage/backend-plugin-api@0.5.1
  - @backstage/cli-common@0.1.12
  - @backstage/config@1.0.7
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2

## 0.4.2-next.2

### Patch Changes

- 5c7ce585824: Allow an additionalConfig to be provided to loadBackendConfig that fetches config values during runtime.
- Updated dependencies
  - @backstage/backend-common@0.18.4-next.2
  - @backstage/plugin-permission-node@0.7.7-next.2
  - @backstage/backend-plugin-api@0.5.1-next.2
  - @backstage/backend-tasks@0.5.1-next.2
  - @backstage/cli-common@0.1.12
  - @backstage/config@1.0.7
  - @backstage/config-loader@1.1.9
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2
  - @backstage/plugin-auth-node@0.2.13-next.2

## 0.4.2-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-permission-node@0.7.7-next.1
  - @backstage/backend-tasks@0.5.1-next.1
  - @backstage/backend-common@0.18.4-next.1
  - @backstage/backend-plugin-api@0.5.1-next.1
  - @backstage/cli-common@0.1.12
  - @backstage/config@1.0.7
  - @backstage/config-loader@1.1.9
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2
  - @backstage/plugin-auth-node@0.2.13-next.1

## 0.4.2-next.0

### Patch Changes

- 8cce2205a39: Register unhandled rejection and uncaught exception handlers to avoid backend crashes.
- Updated dependencies
  - @backstage/backend-common@0.18.4-next.0
  - @backstage/config@1.0.7
  - @backstage/backend-plugin-api@0.5.1-next.0
  - @backstage/backend-tasks@0.5.1-next.0
  - @backstage/cli-common@0.1.12
  - @backstage/config-loader@1.1.9
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2
  - @backstage/plugin-auth-node@0.2.13-next.0
  - @backstage/plugin-permission-node@0.7.7-next.0

## 0.4.1

### Patch Changes

- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 482dae5de1c: Updated link to docs.
- 915e46622cf: Add support for `NotImplementedError`, properly returning 501 as status code.
- Updated dependencies
  - @backstage/plugin-permission-node@0.7.6
  - @backstage/plugin-auth-node@0.2.12
  - @backstage/backend-tasks@0.5.0
  - @backstage/backend-common@0.18.3
  - @backstage/errors@1.1.5
  - @backstage/backend-plugin-api@0.5.0
  - @backstage/config-loader@1.1.9
  - @backstage/cli-common@0.1.12
  - @backstage/config@1.0.7
  - @backstage/types@1.0.2

## 0.4.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-auth-node@0.2.12-next.2
  - @backstage/backend-tasks@0.5.0-next.2
  - @backstage/backend-common@0.18.3-next.2
  - @backstage/backend-plugin-api@0.4.1-next.2
  - @backstage/plugin-permission-node@0.7.6-next.2
  - @backstage/config@1.0.7-next.0

## 0.4.1-next.1

### Patch Changes

- 482dae5de1c: Updated link to docs.
- 915e46622cf: Add support for `NotImplementedError`, properly returning 501 as status code.
- Updated dependencies
  - @backstage/plugin-permission-node@0.7.6-next.1
  - @backstage/errors@1.1.5-next.0
  - @backstage/backend-common@0.18.3-next.1
  - @backstage/config-loader@1.1.9-next.0
  - @backstage/plugin-auth-node@0.2.12-next.1
  - @backstage/backend-plugin-api@0.4.1-next.1
  - @backstage/backend-tasks@0.4.4-next.1
  - @backstage/cli-common@0.1.12-next.0
  - @backstage/config@1.0.7-next.0
  - @backstage/types@1.0.2

## 0.4.1-next.0

### Patch Changes

- 928a12a9b3: Internal refactor of `/alpha` exports.
- Updated dependencies
  - @backstage/backend-tasks@0.4.4-next.0
  - @backstage/backend-plugin-api@0.4.1-next.0
  - @backstage/backend-common@0.18.3-next.0
  - @backstage/cli-common@0.1.11
  - @backstage/config@1.0.6
  - @backstage/config-loader@1.1.8
  - @backstage/errors@1.1.4
  - @backstage/types@1.0.2
  - @backstage/plugin-auth-node@0.2.12-next.0
  - @backstage/plugin-permission-node@0.7.6-next.0

## 0.4.0

### Minor Changes

- 01a075ec1d: **BREAKING**: Renamed `RootHttpRouterConfigureOptions` to `RootHttpRouterConfigureContext`, and removed the unused type `ServiceOrExtensionPoint`.
- 4ae71b7f2e: **BREAKING** Renaming `*Factory` exports to `*ServiceFactory` instead. For example `configFactory` now is exported as `configServiceFactory`.
- d31d8e00b3: **BREAKING** `HttpServerCertificateOptions` when specified with a `key` and `cert` should also have the `type: 'pem'` instead of `type: 'plain'`

### Patch Changes

- a18da2f8b5: Fixed an issue were the log redaction didn't properly escape RegExp characters.
- 5febb216fe: Updated to match the new `CacheService` interface.
- e716946103: Updated usage of the lifecycle service.
- f60cca9da1: Updated database factory to pass service deps required for restoring database state during development.
- 610d65e143: Updates to match new `BackendFeature` type.
- 725383f69d: Tweaked messaging in the README.
- b86efa2d04: Updated usage of `ServiceFactory`.
- ab22515647: The shutdown signal handlers are now installed as part of the backend instance rather than the lifecycle service, and explicitly cause the process to exit.
- b729f9f31f: Moved the options of the `config` and `rootHttpRouter` services out to the factories themselves, where they belong
- ed8b5967d7: `HttpRouterFactoryOptions.getPath` is now optional as a default value is always provided in the factory.
- 71a5ec0f06: Updated usages of `LogMeta`.
- Updated dependencies
  - @backstage/backend-plugin-api@0.4.0
  - @backstage/backend-common@0.18.2
  - @backstage/backend-tasks@0.4.3
  - @backstage/cli-common@0.1.11
  - @backstage/config@1.0.6
  - @backstage/config-loader@1.1.8
  - @backstage/errors@1.1.4
  - @backstage/types@1.0.2
  - @backstage/plugin-auth-node@0.2.11
  - @backstage/plugin-permission-node@0.7.5

## 0.4.0-next.2

### Minor Changes

- 01a075ec1d: **BREAKING**: Renamed `RootHttpRouterConfigureOptions` to `RootHttpRouterConfigureContext`, and removed the unused type `ServiceOrExtensionPoint`.
- 4ae71b7f2e: **BREAKING** Renaming `*Factory` exports to `*ServiceFactory` instead. For example `configFactory` now is exported as `configServiceFactory`.
- d31d8e00b3: **BREAKING** `HttpServerCertificateOptions` when specified with a `key` and `cert` should also have the `type: 'pem'` instead of `type: 'plain'`

### Patch Changes

- e716946103: Updated usage of the lifecycle service.
- f60cca9da1: Updated database factory to pass service deps required for restoring database state during development.
- 610d65e143: Updates to match new `BackendFeature` type.
- ab22515647: The shutdown signal handlers are now installed as part of the backend instance rather than the lifecycle service, and explicitly cause the process to exit.
- b729f9f31f: Moved the options of the `config` and `rootHttpRouter` services out to the factories themselves, where they belong
- 71a5ec0f06: Updated usages of `LogMeta`.
- Updated dependencies
  - @backstage/backend-plugin-api@0.4.0-next.2
  - @backstage/backend-common@0.18.2-next.2
  - @backstage/backend-tasks@0.4.3-next.2
  - @backstage/plugin-auth-node@0.2.11-next.2
  - @backstage/plugin-permission-node@0.7.5-next.2
  - @backstage/cli-common@0.1.11
  - @backstage/config@1.0.6
  - @backstage/config-loader@1.1.8
  - @backstage/errors@1.1.4
  - @backstage/types@1.0.2

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.18.2-next.1
  - @backstage/backend-plugin-api@0.3.2-next.1
  - @backstage/backend-tasks@0.4.3-next.1
  - @backstage/cli-common@0.1.11
  - @backstage/config@1.0.6
  - @backstage/config-loader@1.1.8
  - @backstage/errors@1.1.4
  - @backstage/types@1.0.2
  - @backstage/plugin-auth-node@0.2.11-next.1
  - @backstage/plugin-permission-node@0.7.5-next.1

## 0.3.2-next.0

### Patch Changes

- a18da2f8b5: Fixed an issue were the log redaction didn't properly escape RegExp characters.
- ed8b5967d7: `HttpRouterFactoryOptions.getPath` is now optional as a default value is always provided in the factory.
- Updated dependencies
  - @backstage/backend-common@0.18.2-next.0
  - @backstage/backend-tasks@0.4.3-next.0
  - @backstage/plugin-auth-node@0.2.11-next.0
  - @backstage/plugin-permission-node@0.7.5-next.0
  - @backstage/backend-plugin-api@0.3.2-next.0

## 0.3.0

### Minor Changes

- 02b119ff93: **BREAKING**: The `httpRouterFactory` now accepts a `getPath` option rather than `indexPlugin`. To set up custom index path, configure the new `rootHttpRouterFactory` with a custom `indexPath` instead.

  Added an implementation for the new `rootHttpRouterServiceRef`.

### Patch Changes

- ecc6bfe4c9: Use new `ServiceFactoryOrFunction` type.
- b99c030f1b: Moved over implementation of the root HTTP service from `@backstage/backend-common`, and replaced the `middleware` option with a `configure` callback option.
- 170282ece6: Fixed a bug in the default token manager factory where it created multiple incompatible instances.
- 843a0a158c: Added service factory for the new core identity service.
- 150a7dd790: An error will now be thrown if attempting to override the plugin metadata service.
- 483e907eaf: Internal updates of `createServiceFactory` from `@backstage/backend-plugin-api`.
- 015a6dced6: The `createSpecializedBackend` function will now throw an error if duplicate service implementations are provided.
- e3fca10038: Tweaked the plugin logger to use `plugin` as the label for the plugin ID, rather than `pluginId`.
- ecbec4ec4c: Internal refactor to match new options pattern in the experimental backend system.
- 51b7a7ed07: Exported the default root HTTP router implementation as `DefaultRootHttpRouter`. It only implements the routing layer and needs to be exposed via an HTTP server similar to the built-in setup in the `rootHttpRouterFactory`.
- 0e63aab311: Moved over logging and configuration loading implementations from `@backstage/backend-common`. There is a now `WinstonLogger` which implements the `RootLoggerService` through Winston with accompanying utilities. For configuration the `loadBackendConfig` function has been moved over, but it now instead returns an object with a `config` property.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.
- 3b8fd4169b: Internal folder structure refactor.
- 6cfd4d7073: Updated implementations for the new `RootLifecycleService`.
- Updated dependencies
  - @backstage/backend-plugin-api@0.3.0
  - @backstage/backend-common@0.18.0
  - @backstage/backend-tasks@0.4.1
  - @backstage/config@1.0.6
  - @backstage/cli-common@0.1.11
  - @backstage/config-loader@1.1.8
  - @backstage/errors@1.1.4
  - @backstage/types@1.0.2
  - @backstage/plugin-auth-node@0.2.9
  - @backstage/plugin-permission-node@0.7.3

## 0.3.0-next.1

### Minor Changes

- 02b119ff93: **BREAKING**: The `httpRouterFactory` now accepts a `getPath` option rather than `indexPlugin`. To set up custom index path, configure the new `rootHttpRouterFactory` with a custom `indexPath` instead.

  Added an implementation for the new `rootHttpRouterServiceRef`.

### Patch Changes

- ecc6bfe4c9: Use new `ServiceFactoryOrFunction` type.
- b99c030f1b: Moved over implementation of the root HTTP service from `@backstage/backend-common`, and replaced the `middleware` option with a `configure` callback option.
- 150a7dd790: An error will now be thrown if attempting to override the plugin metadata service.
- 015a6dced6: The `createSpecializedBackend` function will now throw an error if duplicate service implementations are provided.
- e3fca10038: Tweaked the plugin logger to use `plugin` as the label for the plugin ID, rather than `pluginId`.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@backstage/backend-common`.
- Updated dependencies
  - @backstage/backend-plugin-api@0.3.0-next.1
  - @backstage/backend-common@0.18.0-next.1
  - @backstage/backend-tasks@0.4.1-next.1
  - @backstage/plugin-permission-node@0.7.3-next.1
  - @backstage/config@1.0.6-next.0
  - @backstage/errors@1.1.4

## 0.2.5-next.0

### Patch Changes

- 6cfd4d7073: Updated implementations for the new `RootLifecycleService`.
- Updated dependencies
  - @backstage/backend-plugin-api@0.2.1-next.0
  - @backstage/backend-common@0.18.0-next.0
  - @backstage/backend-tasks@0.4.1-next.0
  - @backstage/errors@1.1.4
  - @backstage/plugin-permission-node@0.7.3-next.0

## 0.2.4

### Patch Changes

- cb1c2781c0: Updated logger implementations to match interface changes.
- 884d749b14: Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- afa3bf5657: Added `.stop()` method to `Backend`.
- d6dbf1792b: Added `lifecycleFactory` implementation.
- 05a928e296: Updated usages of types from `@backstage/backend-plugin-api`.
- 5260d8fc7d: Root scoped services are now always initialized, regardless of whether they're used by any features.
- Updated dependencies
  - @backstage/backend-common@0.17.0
  - @backstage/backend-tasks@0.4.0
  - @backstage/plugin-permission-node@0.7.2
  - @backstage/errors@1.1.4
  - @backstage/backend-plugin-api@0.2.0

## 0.2.4-next.3

### Patch Changes

- Updated dependencies
  - @backstage/backend-tasks@0.4.0-next.3
  - @backstage/plugin-permission-node@0.7.2-next.3
  - @backstage/backend-common@0.17.0-next.3
  - @backstage/backend-plugin-api@0.2.0-next.3
  - @backstage/errors@1.1.4-next.1

## 0.2.4-next.2

### Patch Changes

- 884d749b14: Refactored to use `coreServices` from `@backstage/backend-plugin-api`.
- Updated dependencies
  - @backstage/backend-common@0.17.0-next.2
  - @backstage/backend-plugin-api@0.2.0-next.2
  - @backstage/backend-tasks@0.4.0-next.2
  - @backstage/plugin-permission-node@0.7.2-next.2
  - @backstage/errors@1.1.4-next.1

## 0.2.4-next.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.17.0-next.1
  - @backstage/backend-tasks@0.4.0-next.1
  - @backstage/backend-plugin-api@0.1.5-next.1
  - @backstage/plugin-permission-node@0.7.2-next.1
  - @backstage/errors@1.1.4-next.1

## 0.2.4-next.0

### Patch Changes

- d6dbf1792b: Added `lifecycleFactory` implementation.
- Updated dependencies
  - @backstage/backend-common@0.16.1-next.0
  - @backstage/plugin-permission-node@0.7.2-next.0
  - @backstage/backend-plugin-api@0.1.5-next.0
  - @backstage/backend-tasks@0.3.8-next.0
  - @backstage/errors@1.1.4-next.0

## 0.2.3

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.16.0
  - @backstage/backend-tasks@0.3.7
  - @backstage/backend-plugin-api@0.1.4
  - @backstage/plugin-permission-node@0.7.1
  - @backstage/errors@1.1.3

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.16.0-next.1
  - @backstage/backend-plugin-api@0.1.4-next.1
  - @backstage/backend-tasks@0.3.7-next.1
  - @backstage/plugin-permission-node@0.7.1-next.1
  - @backstage/errors@1.1.3-next.0

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.16.0-next.0
  - @backstage/backend-tasks@0.3.7-next.0
  - @backstage/backend-plugin-api@0.1.4-next.0
  - @backstage/plugin-permission-node@0.7.1-next.0
  - @backstage/errors@1.1.3-next.0

## 0.2.2

### Patch Changes

- 0027a749cd: Added possibility to configure index plugin of the HTTP router service.
- 45857bffae: Properly export `rootLoggerFactory`.
- Updated dependencies
  - @backstage/backend-common@0.15.2
  - @backstage/backend-tasks@0.3.6
  - @backstage/plugin-permission-node@0.7.0
  - @backstage/backend-plugin-api@0.1.3
  - @backstage/errors@1.1.2

## 0.2.2-next.2

### Patch Changes

- Updated dependencies
  - @backstage/backend-tasks@0.3.6-next.2
  - @backstage/backend-common@0.15.2-next.2
  - @backstage/plugin-permission-node@0.7.0-next.2
  - @backstage/backend-plugin-api@0.1.3-next.2
  - @backstage/errors@1.1.2-next.2

## 0.2.2-next.1

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.15.2-next.1
  - @backstage/backend-plugin-api@0.1.3-next.1
  - @backstage/backend-tasks@0.3.6-next.1
  - @backstage/errors@1.1.2-next.1
  - @backstage/plugin-permission-node@0.6.6-next.1

## 0.2.2-next.0

### Patch Changes

- 0027a749cd: Added possibility to configure index plugin of the HTTP router service.
- 45857bffae: Properly export `rootLoggerFactory`.
- Updated dependencies
  - @backstage/backend-plugin-api@0.1.3-next.0
  - @backstage/backend-common@0.15.2-next.0
  - @backstage/backend-tasks@0.3.6-next.0
  - @backstage/plugin-permission-node@0.6.6-next.0
  - @backstage/errors@1.1.2-next.0

## 0.2.1

### Patch Changes

- 2c57c0c499: Made `ApiRef.defaultFactory` internal.
- 854ba37357: Updated to support new `ServiceFactory` formats.
- af6bb42c68: Updated `ServiceRegistry` to not initialize factories more than once.
- 409ed984e8: Updated service implementations and backend wiring to support scoped service.
- de3347ca74: Updated usages of `ServiceFactory`.
- 1f384c5644: Improved error messaging when failing to instantiate services.
- Updated dependencies
  - @backstage/backend-plugin-api@0.1.2
  - @backstage/backend-common@0.15.1
  - @backstage/plugin-permission-node@0.6.5
  - @backstage/backend-tasks@0.3.5
  - @backstage/errors@1.1.1

## 0.2.1-next.2

### Patch Changes

- 854ba37357: Updated to support new `ServiceFactory` formats.
- 409ed984e8: Updated service implementations and backend wiring to support scoped service.
- Updated dependencies
  - @backstage/backend-plugin-api@0.1.2-next.2
  - @backstage/errors@1.1.1-next.0
  - @backstage/backend-common@0.15.1-next.3
  - @backstage/backend-tasks@0.3.5-next.1
  - @backstage/plugin-permission-node@0.6.5-next.3

## 0.2.1-next.1

### Patch Changes

- 2c57c0c499: Made `ApiRef.defaultFactory` internal.
- af6bb42c68: Updated `ServiceRegistry` to not initialize factories more than once.
- 1f384c5644: Improved error messaging when failing to instantiate services.
- Updated dependencies
  - @backstage/backend-plugin-api@0.1.2-next.1
  - @backstage/backend-common@0.15.1-next.2
  - @backstage/plugin-permission-node@0.6.5-next.2

## 0.2.1-next.0

### Patch Changes

- de3347ca74: Updated usages of `ServiceFactory`.
- Updated dependencies
  - @backstage/backend-common@0.15.1-next.0
  - @backstage/backend-tasks@0.3.5-next.0
  - @backstage/backend-plugin-api@0.1.2-next.0
  - @backstage/plugin-permission-node@0.6.5-next.0

## 0.2.0

### Minor Changes

- 5df230d48c: Introduced a new `backend-defaults` package carrying `createBackend` which was previously exported from `backend-app-api`.
  The `backend-app-api` package now exports the `createSpecializedBacked` that does not add any service factories by default.

### Patch Changes

- 0599732ec0: Refactored experimental backend system with new type names.
- Updated dependencies
  - @backstage/backend-common@0.15.0
  - @backstage/backend-plugin-api@0.1.1
  - @backstage/backend-tasks@0.3.4
  - @backstage/plugin-permission-node@0.6.4

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @backstage/backend-common@0.15.0-next.0
  - @backstage/backend-tasks@0.3.4-next.0
  - @backstage/backend-plugin-api@0.1.1-next.0
  - @backstage/plugin-permission-node@0.6.4-next.0

## 0.1.0

### Minor Changes

- 91c1d12123: Add initial plumbing for creating backends using the experimental backend framework.

  This package is highly **EXPERIMENTAL** and should not be used in production.

### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.1.0
  - @backstage/backend-common@0.14.1
  - @backstage/plugin-permission-node@0.6.3
  - @backstage/backend-tasks@0.3.3

## 0.1.0-next.0

### Minor Changes

- 91c1d12123: Add initial plumbing for creating backends using the experimental backend framework.

  This package is highly **EXPERIMENTAL** and should not be used in production.

### Patch Changes

- Updated dependencies
  - @backstage/backend-plugin-api@0.1.0-next.0
  - @backstage/backend-common@0.14.1-next.3
  - @backstage/plugin-permission-node@0.6.3-next.2
  - @backstage/backend-tasks@0.3.3-next.3
