import datetime
import calendar

def solution(D):
    for x,y in D.items():
        day = datetime.datetime.strptime(x,'%Y-%m-%d').weekday()
        di = {calendar.day_name[day]:y}
        print(di)

D={"2020-01-01":4, '2020-01-02':4, '2020-04-03':6,'2020-04-04':8,'2020-04-05':2,'2020-04-06':-6,'2020-04-07':2,'2020-04-08':-2}

solution(D)