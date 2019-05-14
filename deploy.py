import os
import datetime
import shutil

domain = "auto-check.ml"
now = str(datetime.datetime.now())
dash = "\n-----------------------------\n"
dots = "..."
print(dash, "cleaning old build files", dots, dash)
shutil.rmtree('docs', ignore_errors=True)
print("done")
print(dash, "building source", dots, dash)
os.system("npm run build")
print(dash, "setting domain name to", domain, dash)
with open("docs/CNAME", "w+") as c:
    c.write(domain)
print("done")
print(dash, "deploying to github pages", dots, dash)
os.system("git add -A")
print("git commit -m 'deployed on {now}'".format(now=now))
os.system()
os.system("git push")
print(dash, "completed deployment process", dash)