import os
from pymongo import MongoClient
from pprint import pprint
from dotenv import load_dotenv
load_dotenv()
cluster = MongoClient(os.getenv("CLUSTER"))
db = cluster["Filtered_Articles"]
import requests
from bs4 import BeautifulSoup as soup
import newspaper
from newspaper import Article
import re

#Websites = ["https://www.latimes.com","https://www.cbsnews.com","https://www.nbcnews.com","https://www.cnn.com","https://www.nytimes.com","https://www.latimes.com","https://www.wsj.com"]

keywords_to_check = ["Ukraine","ukraine", "Putin","putin", "War","war", "Biden", "biden", "Russia","russia", "Belarus","belarus", "WW3", "bombing"]
#links = []
DATA = {0: {
            "title":'0',
            "url":'0',
            "authors":'0',
            "publish_date":'0'
            },
        }

my_url = "https://www.nytimes.com"
sections = ["/section/world","/section/politics"]
#my_url = "https://www.nytimes.com/section/politics"

def get_content_string(url):
    page = requests.get(url)
    page_soup = soup(page.content, 'html.parser')
    # Use the below statement as a visualizer of the HTML outline.
    #print(page_soup)
    containers = page_soup.find_all("script", {"type": "application/ld+json"})

    article_list = []
    for container in containers:
        for dictionary in container:
            article_list.append(dictionary)

    article_list[0:2] = [''.join(article_list[0:2])]
    content_string = article_list[0]
    article_index = content_string.index("itemListElement")
    content_string = content_string[article_index + 18:]

    return content_string


# Returns a list of URLS
def urlfilter(content_string):
    Filtered=[]
    for match in re.findall('url":"(.*?)"."pos', content_string, re.S):
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

for subcat in sections:
    #print(my_url+subcat)
    temp = get_content_string(my_url+subcat)
    urls = urlfilter(temp)
    #for i in urls:
        #print(i)
    collection = db[my_url]
    for ind,link in enumerate(urls):
        print(link)
        print(get_title(link))
        #print(link)
        print(get_date(link))

        DATA[ind]= {}
        DATA[ind]["title"] = get_title(link)
        DATA[ind]["url"] = link
        #print(get_date(link))
        DATA[ind]["publish_date"] = get_date(link)
        collection.insert_one(DATA[ind])















#print(links[0])

# Issue the serverStatus command and print the results


#post = {"_id": 1, "name": "Lue", "url": "idk"}
