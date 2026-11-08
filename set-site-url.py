# Замена адреса сайта во всех файлах. Запуск: python set-site-url.py https://ВАШ-НИК.github.io/ИМЯ-РЕПОЗИТОРИЯ/
import sys,pathlib
old='https://tonytest180.github.io/webflux/';new=sys.argv[1].rstrip('/')+'/'
n=0
for p in pathlib.Path('.').rglob('*'):
    if p.suffix in('.html','.xml','.txt'):
        t=p.read_text(encoding='utf-8')
        if old in t:p.write_text(t.replace(old,new),encoding='utf-8');n+=1
print('Обновлено файлов:',n)
