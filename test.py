import requests

cookies = {
    'a1': '19e42f7b535h4cr3x70ylotumauq0mn0ntbpt58y450000113377',
    'webId': 'ff32dfa5e630ef9294c533e3bf50f22f',
    'gid': 'yjd4JiWSqJI0yjd4JiWD292Yq2x4SFqCW8v1Dv4l97607U28A86I89888yyqqWW80KYYj04j',
    'ets': '1779240000200',
    'customerClientId': '206735289373633',
    'customer-sso-sid': '68c517641896148702396417kqrsiukt8k1vo8yx',
    'x-user-id-creator.xiaohongshu.com': '687dde9b000000001e03f761',
    'abRequestId': 'ff32dfa5e630ef9294c533e3bf50f22f',
    'webBuild': '6.12.1',
    'x-rednote-datactry': 'CN',
    'x-rednote-holderctry': 'CN',
    'access-token-creator.xiaohongshu.com': 'customer.creator.AT-68c5176427113764448010251gwmket2nlvins9m',
    'galaxy_creator_session_id': 'AFZ0SsEv0EAEBXHAL0lerJlxBqecgzjoR4Jk',
    'galaxy.creator.beaker.session.id': '1779457409236055563638',
    'id_token': 'VjEAAJ7YxkrPcl6Rwf0e4/hncIEOQcvsM8XEsumLpKK9U4wiuSn6acA/apBn1pu5xPg6gNGURv8nKb49CgKVXdmrsE0ppqX6GE7epKUxrRGznvcsrto/qQpEsr5ngPIzf5kk5KFv',
    'web_session': '030037ad3c810463b57478ac6b2d4a886e2b25',
    'unread': '{%22ub%22:%2269f869e40000000022025464%22%2C%22ue%22:%2269f86121000000002003942c%22%2C%22uc%22:21}',
    'websectiga': '82e85efc5500b609ac1166aaf086ff8aa4261153a448ef0be5b17417e4512f28',
    'sec_poison_id': '614610fc-1cf1-4cc2-afa3-a770218f911b',
    'acw_tc': '0a0d096b17798438067561961eaf65f09528c1c719af7ee369356a59764b70',
    'xsecappid': 'ugc',
    'loadts': '1779843857203',
}

headers = {
    'authority': 'creator.xiaohongshu.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'authorization': '',
    'cache-control': 'no-cache',
    # 'cookie': 'a1=19e42f7b535h4cr3x70ylotumauq0mn0ntbpt58y450000113377; webId=ff32dfa5e630ef9294c533e3bf50f22f; gid=yjd4JiWSqJI0yjd4JiWD292Yq2x4SFqCW8v1Dv4l97607U28A86I89888yyqqWW80KYYj04j; ets=1779240000200; customerClientId=206735289373633; customer-sso-sid=68c517641896148702396417kqrsiukt8k1vo8yx; x-user-id-creator.xiaohongshu.com=687dde9b000000001e03f761; abRequestId=ff32dfa5e630ef9294c533e3bf50f22f; webBuild=6.12.1; x-rednote-datactry=CN; x-rednote-holderctry=CN; access-token-creator.xiaohongshu.com=customer.creator.AT-68c5176427113764448010251gwmket2nlvins9m; galaxy_creator_session_id=AFZ0SsEv0EAEBXHAL0lerJlxBqecgzjoR4Jk; galaxy.creator.beaker.session.id=1779457409236055563638; id_token=VjEAAJ7YxkrPcl6Rwf0e4/hncIEOQcvsM8XEsumLpKK9U4wiuSn6acA/apBn1pu5xPg6gNGURv8nKb49CgKVXdmrsE0ppqX6GE7epKUxrRGznvcsrto/qQpEsr5ngPIzf5kk5KFv; web_session=030037ad3c810463b57478ac6b2d4a886e2b25; unread={%22ub%22:%2269f869e40000000022025464%22%2C%22ue%22:%2269f86121000000002003942c%22%2C%22uc%22:21}; websectiga=82e85efc5500b609ac1166aaf086ff8aa4261153a448ef0be5b17417e4512f28; sec_poison_id=614610fc-1cf1-4cc2-afa3-a770218f911b; acw_tc=0a0d096b17798438067561961eaf65f09528c1c719af7ee369356a59764b70; xsecappid=ugc; loadts=1779843857203',
    'pragma': 'no-cache',
    'referer': 'https://creator.xiaohongshu.com/new/home',
    'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'x-b3-traceid': 'bbf4f1829a37ce35',
    # 'x-s': 'XYS_2UQhPsHCH0c1PUhMHjIj2erjwjQM89PjNsQhPjHCHS4kJfz647PjNsQhPUHCHfM1qAZlPebK/MSB8LLAcDks/okj/aRYpMch+S+Q8FTDGnbH/08fJAq6J0G7+9MxnBRhn/bHpe8HcMby/9pbcf4B8npa+SWEysTa2rDUJp4rcfTszUR7Lfb9+MQEwBQ6JaR6cS4hp7WU/FIF+bkgt9QCLBSILrRePbme/jTDLn8FynSB+7zh4bQ8Le+6qokc4f+LGgSCzemoagSf2piA4089/bq3ynls/F+BJ0GIPBW9PeQI+pbjaAmb/epDa/+C4em6PfFjNsQh+sHCHjQR',
    'x-s-common': '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',
    'x-t': '1779843860363',
    'x-xray-traceid': 'cf337b032c58c7ab23ca15622f5c860f',
}


# import execjs
# ctx  = execjs.compile(open('target.js','r',encoding='utf-8').read())
# # x_s= ctx.call('get_xs', json.dumps(url), json.dumps(json_data))
# x_s= ctx.call('get_xs', url, json_data)
# headers['x-s']=x_s
# print(x_s,len(x_s))

import execjs
getxs=execjs.compile(open('target.js','r',encoding='utf-8').read())
x_s=getxs.call('get_xs','/api/galaxy/v2/creator/datacenter/account/base', '')
headers['x-s']=x_s
print(x_s,len(x_s))

response = requests.get(
    'https://creator.xiaohongshu.com/api/galaxy/v2/creator/datacenter/account/base',
    cookies=cookies,
    headers=headers,
)


print(response)
# print(response.json())
