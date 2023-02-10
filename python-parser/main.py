from os import system, name as osName
import requests
from bs4 import BeautifulSoup
import json

def clearConsole():
    system("cls" if osName == "nt" else "clear")

def main():
   clearConsole()
   print("Welcome")

   url = "https://japanese.fandom.com/wiki/Hiragana"
   page = requests.get(url)

   soup = BeautifulSoup(page.content, "html.parser")

   result = {
      "cells": {}
   }
   result["table"] = soup.find("div", class_="mw-parser-output").find("table", class_="article-table")

   for td in result["table"].find_all("td"):
      resArr = td.contents

      res1 = list(map(lambda elem: elem.text.strip().lower().replace("\n", ""), resArr))
      res1 = list(filter(None, res1))
      print(res1)

      result["cells"][res1[1]] = {
         "letter": res1[1],
         "symbol": res1[0]
      }

   # print(result["cells"])

   f = open("python-parser/hiragana.json", "w")
   f.write(json.dumps(result["cells"]))
   f.close()

if __name__ == "__main__":
   main()
