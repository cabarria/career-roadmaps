@echo off
setlocal
pushd "%~dp0.." || exit /b 1

set "NODE_VERSION="
set /p NODE_VERSION=<.node-version
set "NODE_EXE="

rem Prefer the installed project version even when NVM has no active version.
if defined NVM_HOME if exist "%NVM_HOME%\installs\v%NODE_VERSION%\node.exe" set "NODE_EXE=%NVM_HOME%\installs\v%NODE_VERSION%\node.exe"
if not defined NODE_EXE for /f "delims=" %%N in ('where node.exe 2^>nul') do if not defined NODE_EXE set "NODE_EXE=%%N"
if not defined NODE_EXE goto missing_node

"%NODE_EXE%" -e "if (process.versions.node.split('.')[0] !== '24') process.exit(1)"
if errorlevel 1 goto missing_node
for %%N in ("%NODE_EXE%") do set "NODE_DIR=%%~dpN"
set "PATH=%NODE_DIR%;%PATH%"

if not exist "node_modules\vite\bin\vite.js" (
    if not exist "%NODE_DIR%node_modules\npm\bin\npm-cli.js" (
        echo npm is missing. Install it with Node.js and run npm ci. 1>&2
        goto failed
    )
    "%NODE_EXE%" "%NODE_DIR%node_modules\npm\bin\npm-cli.js" ci
    if errorlevel 1 goto failed
)

echo Starting Career Roadmaps. Open the local URL printed by Vite. Ctrl+C to stop.
"%NODE_EXE%" "node_modules\vite\bin\vite.js" --host 127.0.0.1 --strictPort %*
set "STATUS=%ERRORLEVEL%"
popd
exit /b %STATUS%

:missing_node
echo Node.js 24 is required. Install Node.js %NODE_VERSION% or run nvm install %NODE_VERSION%. 1>&2
:failed
popd
exit /b 1
