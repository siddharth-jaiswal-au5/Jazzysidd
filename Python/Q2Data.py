import datetime
import calendar

def solution(D):
    di={}
    for x,y in D.items():
        day = datetime.datetime.strptime(x,'%Y-%m-%d').weekday()
        di[calendar.day_name[day]]=y
    
    if "Monday" not in di:
        di['Monday']=(di['Sunday']+di['Tuesday'])/2
    if "Tuesday" not in di:
        di['Tuesday']=(di['Monday']+di['Wednesday'])/2
    if "Wednesday" not in di:
        di['Wednesday']=(di['Tuesday']+di['Thrusday'])/2
    if "Thrusday" not in di:
        di['Thrusday']=(di['Wednesday']+di['Friday'])/2
    if "Friday" not in di:
        di['Friday']=(di['Thrusday']+di['Saturday'])/2
    if "Saturday" not in di:
        di['Saturday']=(di['Friday']+di['Sunday'])/2
    if "Sunday" not in di:
        di['Sunday']=(di['Saturday']+di['Monday'])/2

D={"2020-01-01":4, '2020-01-02':4, '2020-04-03':6,'2020-04-04':8,'2020-04-05':2,'2020-04-06':-6,'2020-04-07':2,'2020-04-08':-2}

solution(D)