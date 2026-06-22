# CI Pipeline Failure Diagnosis

## Failure 1: Unit Test Failure

- **Step:** Run tests  
- **Error:**  
  "Expected: X, Received: Y"  
- **Cause:**  
  The test assertion is incorrect. The expected value in the test does not match the actual output of the function. This causes Jest to fail the test.

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