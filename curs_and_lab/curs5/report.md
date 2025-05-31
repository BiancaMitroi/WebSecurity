# Cross-site scripting (XSS)

### Attack purpose:

- http://193.226.5.99/websec4
- Create an administrator account with the username:
    - [`first_letter_of_first_name`].[`last_name`]
    - e.g. t.stefanut

### Attack steps:

- Authenticate in the application with: `user3` / `pass`
- Make an analysis to find vulnerabilities
- Find a way to exfiltrate CSRF token
- Use the token and CSRF attack to create the account

### User journey:

- Attacker’s page with a link / automated redirection
- Page on the attacked server (legitimate page)
- Attacker’s page with a link / automated redirection
- Page on the attacked server (legitimate page)

## Vulnerabilities
- the crsf token of the session is visible via browser Dev Tools
![1](1.png)
- also, any html injection I insert is not executed, but returned.
![2](2.png)
- the server is not able to execute any external scripts inserted
![3](3.png)

## Plan
For completing the exercise, I've created 3 servers. 1 only for sneding a blind request to the attacked website only to extract the crsf token. It will return all the data from the page via an injection of a hardcoded html code. Second server will listen to this action and will extract the content provided from the first server and will write the csrf token into a file. The third one will make the request to the attacked site with the token already received into the file. Only the first and the third servers will be exposed and accessed by the victim in this order: the first one, then the third one. The code for all the servers is provided into the `curs5` assignment folder.

For the first and third servers I've run the command `python -m http.server` (inside each folder that contains the code for the servers).

For the seconf one I needed to make a node server and run it with `node server.js` (inside th folder that contains the code for the server).