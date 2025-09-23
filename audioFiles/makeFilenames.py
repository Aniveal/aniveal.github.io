import os

open("playlist.txt", "w").close()

with open("playlist.txt", "w") as file:
    for folderName in os.listdir("audioFiles"):
        if(folderName == "makeFilenames.py"): continue
        for filename in os.listdir("audioFiles/" + folderName):
            file.write("audioFiles/" + folderName + "/" + filename + "\n")