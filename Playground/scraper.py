import re
import urllib.request

def getCigarData(url, num):
    count = -1
    get_url= urllib.request.urlopen(url)
    html = get_url.readlines()
    num = str(num)
    html = str(html)
    vitola = (re.findall(r'(?:<h1><a href="\/cigars\/[A-Za-z0-9;,\/?:@&=+$-_.!~*\'()#]+\">)(?P<Vitola>.*?)(?:<\/a><\/h1>)', html))
    brand = (re.findall(r'(?:<li><a href="\/brands\/[A-Za-z0-9;,\/?:@&=+$-_.!~*\'()#]+\">)(?P<Brand>.*?)(?:<\/a><\/li>)', html))
    country = (re.findall(r'(?:Country<\/em><\/li>[\s\S\n]+?<li>)(?P<Country>.*?)(?:<\/li>)', html))
    length = (re.findall(r'(?:Length:<\/em> )(?P<Length>.*?)(?:<\/li>)', html))
    ringGuage = (re.findall(r'(?:Ring Guage:<\/em> )(?P<RingGuage>.*?)(?:<\/li>)', html))
    shape = (re.findall(r'(?:Shape:<\/em> )(?P<Shape>.*?)(?:<\/li>)', html))
    wrapper = (re.findall(r'(?:Wrapper:<\/em> )(?P<Wrapper>.*?)(?:<\/li>)', html))
    binder = (re.findall(r'(?:Binder:<\/em> )(?P<Binder>.*?)(?:<\/li>)', html))
    filler = (re.findall(r'(?:Filler:<\/em> )(?P<Filler>.*?)(?:<\/li>)', html))
    color = (re.findall(r'(?:Color:<\/em> )(?P<Color>.*?)(?:<\/li>)', html))
    strength = (re.findall(r'(?:Strength:<\/em> )(?P<Strength>.*?)(?:<\/li>)', html))
    def recursiveCigarData(num, count, vitola, brand, country, length, ringGuage, shape, wrapper, binder, filler, color, strength):
        while count < 24:
            count += 1
            cigar_id = 'abc' + num + "-" + str(count) + 'abc'
            data1 = f'"{cigar_id}": {{"vitola": "{vitola[count]}", "brand": "{brand[count]}", "mfg_ctry": "{country[count]}", "length": "{length[count]}", "ringGuage": "{ringGuage[count]}", "shape": "{shape[count]}", "wrapper": "{wrapper[count]}", "binder": "{binder[count]}", "filler": "{filler[count]}", "color": "{color[count]}", "strength": "{strength[count]}"}},'
            file1 = open("cigar_data.txt","a")
            file1.writelines(data1 + '\n')
            file1.close()
    recursiveCigarData(num, count, vitola, brand, country, length, ringGuage, shape, wrapper, binder, filler, color, strength)

getCigarData('https://staging.purotrader.com/cigars?page=1', 1)