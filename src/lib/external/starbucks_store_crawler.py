from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

from bs4 import BeautifulSoup
import time
import json
import os
import collections
import sys
from collections import OrderedDict

file_data = OrderedDict()

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
driver.implicitly_wait(5)  # 응답 시간 지연
url = 'https://www.starbucks.co.kr/store/store_map.do'
driver.get(url)
starbucks = []
search = driver.find_element_by_link_text('지역 검색')
time.sleep(1)
search.click()
time.sleep(1)
search = driver.find_elements_by_class_name('set_sido_cd_btn')

sido = {
    '01': '서울',
    '02': '경기',
    '03': '광주',
    '04': '대구',
    '05': '대전',
    '06': '부산',
    '07': '울산',
    '08': '인천',
    '09': '강원',
    '10': '경남',
    '11': '경북',
    '12': '전남',
    '13': '전북',
    '14': '충남',
    '15': '충북',
    '16': '제주',
    '17': '세종',
}

for item in search:
    item.click()
    time.sleep(1)
    sido_code = item.get_attribute('data-sidocd')
    if '17' == sido_code:
        src = driver.page_source
        soup = BeautifulSoup(src, "html.parser")
        name = soup.select('li[data-name]')
        for name_one in name:
            x = name_one['data-lat']  # 위도 저장
            y = name_one['data-long']  # 경도 저장
            z = name_one['data-name']  # 지점명 저장
            p = name_one.select_one('p').text.split(
                '1522-3232')[0]  # 번호는 모든 지점이 동일하여 crawling에서 제외
            # dict 형태로 리스트에 저장
            starbucks.append({
                'sido_code': sido_code,
                'sido': sido[sido_code],
                'name': z,
                'address': p,
                'lat': x,
                'long': y
            })
        time.sleep(1)

        # 열린 페이지 닫기
        driver.close()
    else:
        search2 = driver.find_element_by_link_text('전체')
        search2.click()
        driver.implicitly_wait(5)
        time.sleep(1)

        src = driver.page_source

        soup = BeautifulSoup(src, "html.parser")
        name = soup.select('li[data-name]')
        for name_one in name:
            x = name_one['data-lat']
            y = name_one['data-long']
            z = name_one['data-name']
            p = name_one.select_one('p').text.split('1522-3232')[0]
            starbucks.append({
                'sido_code': sido_code,
                'sido': sido[sido_code],
                'name': z,
                'address': p,
                'lat': x,
                'long': y
            })
        time.sleep(1)

        # 다시 지역 검색 탭으로 돌아가기위한 소스
        search3 = driver.find_element_by_link_text('지역 검색')
        search3.click()
        time.sleep(1)

# 리스트 중복값 제거
starbucks = list(map(dict, collections.OrderedDict.fromkeys(
    tuple(sorted(d.items())) for d in starbucks)))

# 폴더 생성
if not os.path.isfile('src/lib/json/'):
    os.makedirs('src/lib/json/')

# json 출력
with open('src/lib/json/starbucks.json', 'w', encoding="utf-8") as make_file:
    file_data = []
    for i in starbucks:
        file_data.append({
            '시도': i['sido'],
            '시도 코드': i['sido_code'],
            '지점명': i['name'],
            '주소': i['address'],
            '위도': i['lat'],
            '경도': i['long'],
        })
    json.dump(file_data, make_file, ensure_ascii=False, indent="\t")
    sys.exit()
