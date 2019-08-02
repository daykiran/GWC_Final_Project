import labor
import matplotlib.pyplot as plt
import numpy as np
# import plotly.tools as tls
counter= 0

#imports data so that it can be arranged in list
elemOfLabor = labor.get_results()

#empyt list that contains data sorted by month over the years
listOfYears = []

#empty list to hold the population for each race
_2015= []
_2005 = []
_1990 = []
_1975 = []

#labels for x-axis
demographics = ["White", "Black", "Asian"]

#sorts data month by month, over the years
for row in elemOfLabor:
    listOfYears.append(row)
    counter+=1

#parses data for 2015 stats
dataSet2015 = (listOfYears[526])
white = (dataSet2015["Data"]["Civilian Labor Force"]["White"]["Counts"]["All"])
_2015.append(white)
africanAmerican = (dataSet2015["Data"]["Civilian Labor Force"]["Black or African American"]["Counts"]["All"])
_2015.append(africanAmerican)
asian = (dataSet2015["Data"]["Civilian Labor Force"]["Asian"]["Counts"])
_2015.append(asian)
print(_2015)

#parses data for 2005 stats
dataSet2005 = (listOfYears[406])
white = (dataSet2005["Data"]["Civilian Labor Force"]["White"]["Counts"]["All"])
_2005.append(white)
africanAmerican = (dataSet2005["Data"]["Civilian Labor Force"]["Black or African American"]["Counts"]["All"])
_2005.append(africanAmerican)
asian = (dataSet2005["Data"]["Civilian Labor Force"]["Asian"]["Counts"])
_2005.append(asian)
print(_2005)

#parses data for 1990 stats
dataSet1990 = (listOfYears[225])
white = (dataSet1990["Data"]["Civilian Labor Force"]["White"]["Counts"]["All"])
_1990.append(white)
africanAmerican = (dataSet1990["Data"]["Civilian Labor Force"]["Black or African American"]["Counts"]["All"])
_1990.append(africanAmerican)
asian = (dataSet1990["Data"]["Civilian Labor Force"]["Asian"]["Counts"])
_1990.append(asian)
print(_1990)

#parses data for 1975 stats
dataSet1975 = (listOfYears[46])
white = (dataSet1975["Data"]["Civilian Labor Force"]["White"]["Counts"]["All"])
_1975.append(white)
africanAmerican = (dataSet1975["Data"]["Civilian Labor Force"]["Black or African American"]["Counts"]["All"])
_1975.append(africanAmerican)
asian = (dataSet1975["Data"]["Civilian Labor Force"]["Asian"]["Counts"])
_1975.append(asian)
print(_1975)

#functions to organize graph for each of the four years
def plot2015():
    index = np.arange(len(demographics))
    graph2015 = plt.bar(index, _2015, color=(0.9, 0.3, 0.3, 0.6))
    plt.xlabel("Race in the Workforce")
    plt.ylabel("Number of People")
    plt.xticks(index, demographics, fontsize=15, rotation=0)
    plt.title("Demographics in the Workforce In 2015")
    plt.show(graph2015)
plot2015()

def plot2005():
    index = np.arange(len(demographics))
    graph2005 = plt.bar(index, _2005, color=(0.9, 0.3, 0.3, 0.6))
    plt.xlabel("Race in the Workforce")
    plt.ylabel("Number of People")
    plt.xticks(index, demographics, fontsize=15, rotation=0)
    plt.title("Demographics in the Workforce In 2005")
    plt.show(graph2005)
plot2005()

def plot1990():
    index = np.arange(len(demographics))
    graph1990 = plt.bar(index, _1990, color=(0.9, 0.3, 0.3, 0.6))
    plt.xlabel("Race in the Workforce")
    plt.ylabel("Number of People")
    plt.xticks(index, demographics, fontsize=15, rotation=0)
    plt.title("Demographics in the Workforce In 1990")
    plt.show(graph1990)
plot1990()

def plot1975():
    index = np.arange(len(demographics))
    graph1975 = plt.bar(index, _1975, color=(0.9, 0.3, 0.3, 0.6))
    plt.xlabel("Race in the Workforce")
    plt.ylabel("Number of People")
    plt.xticks(index, demographics, fontsize=15, rotation=0)
    plt.title("Demographics in the Workforce In 1975")
    plt.show(graph1975)
plot1975()
