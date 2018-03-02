import requests 
print("downloading with requests")
url_head = 'http://d130f4reeykfib.cloudfront.net:80/models/model_resnet_with_condition_128_full_1/'
urls = ['graph_webassembly.json',
        'graph_webgpu.json',
        'kernels_asmjs.js',
        'kernels_asmjs.js.mem',
        'kernels_webassembly.cpp',
        'kernels_webassembly.js',
        'kernels_webassembly.wasm',
        'kernels_webgpu.metal',
        'weight_webassembly.bin',
        'weight_webgpu.bin']

for i in range(len(urls)):
    r = requests.get(url_head + urls[i]) 
    f = open(urls[i], "wb")
    f.write(r.content)
    f.close()
    print("downloading : ", urls[i], " ...")























    
