===============================
GIT COLLABORATION USING TERMINAL
===============================

Scenario:
Project Name: mern-ecommerce

Team Members:
1. Pavan   -> Frontend Developer
2. Rahul   -> Backend Developer
3. Sneha   -> Database Developer


=================================================
STEP 1: CREATE REPOSITORY ON GITHUB
=================================================

Create a repository on GitHub:

Repository Name:
mern-ecommerce


=================================================
STEP 2: INITIALIZE PROJECT LOCALLY
=================================================

Commands:

mkdir mern-ecommerce
cd mern-ecommerce

git init

touch README.md


Check status:

git status


=================================================
STEP 3: ADD AND COMMIT FILES
=================================================

Stage files:

git add .

Commit files:

git commit -m "Initial project setup"


=================================================
STEP 4: CONNECT GITHUB REPOSITORY
=================================================

Add remote repository:

git remote add origin https://github.com/pavan/mern-ecommerce.git

Check remote:

git remote -v


=================================================
STEP 5: PUSH CODE TO GITHUB
=================================================

git push -u origin main


=================================================
STEP 6: TEAM MEMBERS CLONE REPOSITORY
=================================================

Rahul and Sneha clone repository:

git clone https://github.com/pavan/mern-ecommerce.git

Move inside folder:

cd mern-ecommerce


=================================================
STEP 7: CREATE BRANCHES
=================================================

Rahul creates backend branch:

git checkout -b backend-api


Sneha creates database branch:

git checkout -b database-schema


Pavan creates frontend branch:

git checkout -b frontend-ui


=================================================
STEP 8: WRITE CODE
=================================================

Example for Rahul:

mkdir backend

touch backend/server.js


Check files:

ls


=================================================
STEP 9: CHECK CHANGES
=================================================

git status


=================================================
STEP 10: STAGE CHANGES
=================================================

Stage all files:

git add .

OR specific file:

git add backend/server.js


=================================================
STEP 11: COMMIT CHANGES
=================================================

git commit -m "Created backend server setup"


=================================================
STEP 12: PUSH BRANCH
=================================================

git push origin backend-api


=================================================
STEP 13: PULL LATEST CHANGES
=================================================

Before starting daily work:

git checkout main

git pull origin main


Update feature branch:

git checkout backend-api

git merge main


=================================================
STEP 14: VIEW BRANCHES
=================================================

git branch


=================================================
STEP 15: SWITCH BRANCHES
=================================================

git checkout main

OR

git checkout frontend-ui


=================================================
STEP 16: CREATE PULL REQUEST
=================================================

After pushing branch:

1. Open GitHub
2. Compare changes
3. Create Pull Request
4. Review code
5. Merge Pull Request


=================================================
MERGE CONFLICT SCENARIO
=================================================

Suppose Rahul and Pavan both edit same line in server.js.

Rahul pushes first.

Pavan runs:

git pull origin main


Git shows:

CONFLICT (content): Merge conflict in server.js


Conflict example inside file:

<<<<<<< HEAD
console.log("Frontend Code");
=======
console.log("Backend Code");
>>>>>>> backend-api


=================================================
HOW TO RESOLVE MERGE CONFLICT
=================================================

Edit file manually:

console.log("Frontend + Backend Code");


Then run:

git add .

git commit -m "Resolved merge conflict"

git push origin main


=================================================
STEP 17: VIEW COMMIT HISTORY
=================================================

git log

Short version:

git log --oneline


=================================================
STEP 18: UNDO CHANGES
=================================================

Undo modified file:

git checkout -- server.js


Remove staged file:

git reset HEAD server.js


=================================================
STEP 19: DELETE BRANCH
=================================================

Delete local branch:

git branch -d backend-api


Delete remote branch:

git push origin --delete backend-api


=================================================
STEP 20: STASH TEMPORARY WORK
=================================================

Save unfinished work:

git stash


Restore work:

git stash pop


=================================================
DAILY REAL-WORLD WORKFLOW
=================================================

1. Open terminal
2. Pull latest code
3. Switch to feature branch
4. Write code
5. Check status
6. Add files
7. Commit changes
8. Push branch
9. Create Pull Request


Commands:

git pull origin main

git checkout feature-branch

git status

git add .

git commit -m "Feature completed"

git push origin feature-branch


=================================================
IMPORTANT GIT COMMANDS
=================================================

git init
-> Initialize Git repository

git clone URL
-> Download repository

git status
-> Check modified files

git add .
-> Stage all files

git commit -m "message"
-> Save changes

git push
-> Upload changes to GitHub

git pull
-> Download latest changes

git checkout branch
-> Switch branch

git checkout -b branch
-> Create new branch

git branch
-> Show branches

git merge branch
-> Merge branch

git stash
-> Save temporary work

git log --oneline
-> Show commit history

git remote -v
-> Show remote repository


=================================================
BEST PRACTICES
=================================================

1. Pull latest code before work
2. Never work directly on main branch
3. Use feature branches
4. Write meaningful commit messages
5. Resolve conflicts carefully
6. Review code before merge
7. Keep commits small and clean


=================================================
FULL TERMINAL FLOW EXAMPLE
=================================================

git clone https://github.com/pavan/mern-ecommerce.git

cd mern-ecommerce

git checkout -b login-feature

# write code

git status

git add .

git commit -m "Added login authentication"

git push origin login-feature


Then create Pull Request on GitHub.


=================================================
IMPORTANT CONCEPTS
=================================================

Repository:
Project storage area.

Branch:
Separate working version of code.

Commit:
Snapshot of code changes.

Push:
Upload code to GitHub.

Pull:
Download latest code.

Merge:
Combine branches.

Pull Request:
Request to merge feature branch into main.

Conflict:
Occurs when same lines are edited differently.


=================================================
SUMMARY
=================================================

Git collaboration helps multiple developers work on the same project safely.

Main workflow:
Clone -> Branch -> Code -> Commit -> Push -> Pull Request -> Review -> Merge

Git is widely used in companies for:
1. Team collaboration
2. Version control
3. Code review
4. CI/CD pipelines
5. Safe deployment
