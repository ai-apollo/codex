// @ts-nocheck
const { describe, it, expect } = require('vitest');
const { execSync } = require('child_process');
const fs = require('fs');

describe('generate tasks.md', () => {
  it('pnpm generate creates tasks.md', () => {
    execSync('pnpm run generate');
    expect(fs.existsSync('tasks.md')).toBe(true);
  });

  it('markdown includes make apollo', () => {
    execSync('pnpm run generate');
    const content = fs.readFileSync('tasks.md', 'utf8');
    expect(content).toMatch(/make apollo/);
  });
});
