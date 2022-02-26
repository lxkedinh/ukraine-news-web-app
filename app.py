import os
from pymongo import MongoClient
from pprint import pprint
from dotenv import load_dotenv
from flask import Flask
from flask import render_template, url_for, flash, redirect, request, abort
app = Flask(__name__)
#from flaskblog import app, db, bcrypt
load_dotenv()
cluster = MongoClient(os.getenv("CLUSTER"))
db = cluster["Filtered_Articles"]
import json
import requests
from bs4 import BeautifulSoup as soup
import newspaper
from newspaper import Article
import re


keywords_to_check = ["Ukraine","ukraine", "Putin","putin", "War","war", "Biden", "biden", "Russia","russia", "Belarus","belarus", "WW3", "bombing"]

DATA = {0: {
            "title":'0',
            "url":'0',
            "publish_date":'0'
            },
        }
#my_url = "https://www.latimes.com"
#sections = ["/world-nation","/politics"]

my_url = "https://www.nytimes.com"
sections = ["/section/world","/section/politics"]

def get_data(url):
    page = requests.get(url)
    page_soup = soup(page.content, 'html.parser')
    containers = page_soup.find_all("script", {"type": "application/ld+json"})
    article_list = []
    for container in containers:
        for dictionary in container:
            article_list.append(dictionary)
    article_list[0:2] = [''.join(article_list[0:2])]
    content = article_list[0]
    article_index = content.index("itemListElement")
    content = content[article_index + 18:]
    return content

# Returns a list of URLS
def urlfilter(content):
    Filtered=[]
    for match in re.findall('url":"(.*?)"."pos', content, re.S):
        if any(ext in match for ext in keywords_to_check): # check keyword
            if filter_title(match)!= False:
                Filtered.append(match)
    return Filtered

# Returns a filtered title
def filter_title(title):
    #print (type(title))
    for match in re.findall('true">(.*?) - ', title, re.S):
        if any(ext in match for ext in keywords_to_check): # check keyword
            return match
        else:
            return False

# Returns one title
def get_title(link):
    reqs = requests.get(link)
    soupy = soup(reqs.text, 'html.parser')
    title = str(soupy.find('meta', {'property':'og:title'}).get('content'))
    return title


def get_date(link):
    reqs = requests.get(link)
    soupy = soup(reqs.text, 'html.parser')
    #time = str(soupy.find('meta', {'property':'article:modified_time'}).get('content'))
    time = soupy.find('meta', {'property':'article:modified_time'})
    if (time == type(None)):
        time = soupy.find('meta', {'property':'article:published_time'})
    #print(time)
    return str(time.get('content'))


def get_summary(link):
    reqs = requests.get(link)
    soupy = soup(reqs.text, 'html.parser')
    content = soupy.find('meta', {'name':'description'}).get('content')
    return content

def browse():
    for subcat in sections:
        temp = get_data(my_url+subcat)
        urls = urlfilter(temp)
        collection = db[my_url]
        for ind,link in enumerate(urls):
            #print(link)
            print(get_summary(link))
            #print(get_title(link))
            #print(get_date(link))
            DATA[ind]= {}
            DATA[ind]["title"] = get_title(link)
            DATA[ind]["url"] = link
            DATA[ind]["publish_date"] = get_date(link)
            DATA[ind]["summary"] = get_summary(link)
            collection.insert_one(DATA[ind])



# This call will give you new data
#@app.route(‘/refreshdata’)
#def refreshdata():
    #return ’This page could be used to present plain text or a form for user input!’

@app.route("/getdata")
def getdata():
    mycollection = db["https://www.nytimes.com"]
    print(db)
    #all_hist =

    x = mycollection.find({})
    y = json.dumps(x)
    return y;
    for i in x:
        #print(i)
        print(i["title"])


getdata()
