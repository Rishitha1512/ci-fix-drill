# CI Pipeline Failure Diagnosis

## Failure 1: Unit Test Failure

- **Step:** Run tests  
- **Error:**  
  "Expected: 100, Received: 90"
- **Cause:**  
  The test assertion was incorrect. The function correctly applied a 10% discount, returning 90, but the test expected 100. The issue was in the test, not the function logic.

---

## Failure 2: Dependency Installation Failure

- **Step:** Install dependencies  
- **Error:**  
  "npm ERR! Cannot install with npm install due to lockfile mismatch"  
- **Cause:**  
  The workflow uses `npm install` instead of `npm ci`, making installs non-reproducible. Additionally, the `package-lock.json` may be out of sync with `package.json`.

---

## Failure 3: Workflow Configuration Error

- **Step:** Test job  
- **Error:**  
  "Error: Cannot find module / dependencies not found"  
- **Cause:**  
  The test job runs without installing dependencies and without checking out the repository. Also, it does not depend on the install job (`needs: install`), so it executes in the wrong order.