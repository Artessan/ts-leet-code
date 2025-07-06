# LeetCode Problems in TypeScript

A collection of LeetCode problem solutions implemented in TypeScript with comprehensive test coverage.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Testing](#testing)
- [Available Problems](#available-problems)
- [License](#license)

## Introduction

This repository contains TypeScript solutions to various LeetCode problems. Each solution is thoroughly tested using Vitest to ensure correctness and edge case handling.

## Project Structure

```
├── src/
│   ├── easy/       # Easy difficulty problems
│   ├── medium/     # Medium difficulty problems
│   ├── hard/       # Hard difficulty problems
│   └── index.ts    # Main exports
├── tests/          # Test files for each problem
├── scripts/        # Utility scripts
└── README.md       # This file
```

## Setup

To set up the project locally:

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd leetcode

# Install dependencies
npm install
```

## Usage

This project is designed for personal practice and learning algorithms through LeetCode problems.

### Adding a New Problem

Use the provided script to generate files for a new problem:

```bash
pnpm make problemName --difficulty easy|medium|hard
```

This will create:
- A TypeScript file for your solution under the appropriate difficulty folder
- A markdown file with the problem description
- A test file for your implementation

### Practicing

The workflow for practicing is:

1. Read the problem description in the markdown file
2. Implement your solution in the TypeScript file
3. Run tests to verify your solution works correctly
4. Refine your solution as needed

## Testing

Run tests to verify all solutions are working correctly:

```bash
npm test
```

To run tests for a specific problem:

```bash
npm test -- two-sum
```

## Available Problems

### Easy
- Two Sum - Find indices of two numbers that add up to target
- Palindrome Number - Check if a number reads the same forward and backward
- Roman to Integer - Convert Roman numerals to integers


## License

ISC License - See [LICENSE](LICENSE) file for details