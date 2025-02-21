# Publishing Guide for Vuely

## First-time Setup

```bash
# Login to npm (you'll need an npm account)
npm login
```

## Publishing Commands

### First Release
```bash
cd packages/core
npm publish
```

### Update Package (for subsequent releases)

Choose one of these commands based on the type of update:

```bash
cd packages/core

# For bug fixes (0.0.1 -> 0.0.2)
npm version patch && npm publish

# For new features (0.0.2 -> 0.1.0)
npm version minor && npm publish

# For breaking changes (0.1.0 -> 1.0.0)
npm version major && npm publish
```

## Development Commands

```bash
# Start development
pnpm dev

# Build package
pnpm build

# Run tests
pnpm test

# Type checking
pnpm type-check

# Lint code
pnpm lint
```

## Version Number Meaning

- **Patch** (0.0.X): Bug fixes and minor changes
- **Minor** (0.X.0): New features (non-breaking)
- **Major** (X.0.0): Breaking changes

## Pre-publish Checklist

1. All tests passing (`pnpm test`)
2. Types are correct (`pnpm type-check`)
3. Linting passes (`pnpm lint`)
4. Documentation is updated
5. CHANGELOG.md is updated
6. Correct version number is set
7. Build is successful (`pnpm build`)

## Notes

- The `prepublishOnly` script will automatically run the build before publishing
- Always test the package locally before publishing
- Make sure you're in the `packages/core` directory when publishing
- Update documentation when making changes 