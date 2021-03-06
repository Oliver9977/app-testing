(async () => {
    const url = 'http://alpha.app.prifina.com/';
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({headless:false});
    const localStorage = {
        'amplify-signin-with-hostedUI': 'storageValue', 
        'CognitoIdentityId-us-east-1:27d0bb9c-b563-497b-ad0f-82b0ceb9eb0c':'us-east-1:e814ad4a-1a88-4a35-992b-cd9288c53c9d',
        'CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.e5fc2c0e-2e28-4750-810d-90c0574b85d3.accessToken': 'eyJraWQiOiJBXC9zcE16UVpXeVc5ME9uOWgrcEVvczJ4TG1LOEpOYXFvNmJQMEkrZWJIbz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhNDQwZWU0Ni01YzM1LTQ5Y2MtYjZjZS1kZmM0MDQyMjgyM2IiLCJjb2duaXRvOmdyb3VwcyI6WyJVU0VSIl0sImV2ZW50X2lkIjoiNGQxMDYxMDAtZjU3Zi00ZjU4LTgzNDQtMWFiZWRkYzA5YmQ0IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTYxMjIwMDg3NiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfcmdjTWRoWDVUIiwiZXhwIjoxNjEyMjA0NDc2LCJpYXQiOjE2MTIyMDA4NzYsImp0aSI6IjkwMDdlMjEyLWFkMTYtNGIxYy04ZGE2LTRkNGE0YWM2MTM0MCIsImNsaWVudF9pZCI6IjQ1ZGYxZ2gxbmp2anFycjNoaXZhMm1uaDNiIiwidXNlcm5hbWUiOiJlNWZjMmMwZS0yZTI4LTQ3NTAtODEwZC05MGMwNTc0Yjg1ZDMifQ.h75bmYXBaQZ5qd5LpdN_04CWrKsAvI8DITknrY_cUxh7OksjzDvos4OiW5VSF54MVft6YZRxV0ESwAUx_te43VXTCRBbwxiq5WuAlqtygEtYNgZlxiFKA4eKWHiiOum4swBkQn-wVroVX7x60F69PR-IOvuHxcI--ttth6GvoPuAsQSVhrbHSCPOZ7b9SMpp75cCshGpyycCAoZs-G0vIWbLICQIi85ulJmALGFRUmggR_PKRXKHn405o2TKl5iQ9GWdAB3ZpA-CKH7dr0Zz0H-G5Br085uxCgjBVGQQ3d0F9BrXrzHftB6bDhykrq4jQyMcyIf1BHM7XUKIa4F8sw',
        'CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.e5fc2c0e-2e28-4750-810d-90c0574b85d3.clockDrift' : -21,
        'CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.e5fc2c0e-2e28-4750-810d-90c0574b85d3.idToken': 'eyJraWQiOiJud0V1Vm1IQkdjVk5mc3NhTlZOaTlyNGZpM1RcL1pVQkhcL2s2XC9qRmtmQ1RzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhNDQwZWU0Ni01YzM1LTQ5Y2MtYjZjZS1kZmM0MDQyMjgyM2IiLCJjb2duaXRvOmdyb3VwcyI6WyJVU0VSIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9yZ2NNZGhYNVQiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsImNvZ25pdG86dXNlcm5hbWUiOiJlNWZjMmMwZS0yZTI4LTQ3NTAtODEwZC05MGMwNTc0Yjg1ZDMiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcHB0ZXN0ZXIiLCJnaXZlbl9uYW1lIjoiYXBwdGVzdGVyIiwiYXVkIjoiNDVkZjFnaDFuanZqcXJyM2hpdmEybW5oM2IiLCJldmVudF9pZCI6IjRkMTA2MTAwLWY1N2YtNGY1OC04MzQ0LTFhYmVkZGMwOWJkNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjAwODc2LCJwaG9uZV9udW1iZXIiOiIrMTMxNTI4MTkxNjgiLCJleHAiOjE2MTIyMDQ0NzYsImlhdCI6MTYxMjIwMDg3NiwiZmFtaWx5X25hbWUiOiJhcHB0ZXN0ZXIiLCJlbWFpbCI6InhvZml2aTU2NDJAbGFrbGljYS5jb20ifQ.dS-RrX6uiavy--qlCei7xP_GgLSFtCgIGXpQM2TrXRDIy9Q0mvIjUJX3UAcCStqZyPW9n4fi8x-_mSltk4Eq3bub0yfxVq7ymcSHc53E2X8foiHqjl4AsN2_W2MZvlHN4-jxDG4QjbjrfKFKJkbbuwu0uXQNt9IbBj8f1sKVWMcNidijJup1bBM0pLcZpANp_oX1sVg89rtwIqOhz5YbwWCHngJ3YlUqL-uFPtXmcLjUUctuXMdIXNNK5hxQuRRk9_kQBKotmu7OzBoTMqjpIdGOkjjargD8GmYh-2ttilKAsffBw0HrfpUutZqSz6TIZJUWGctwtISJ4nqsACKpsw',
        'CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.e5fc2c0e-2e28-4750-810d-90c0574b85d3.refreshToken': 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.F_eiUjx0tfoDBRuytF_tXkR0urvtKZthiduFoSxhXH8hYQMJOBtI-FBUt4DUVvM_usl4q2Iz7JvIcO-wV4kdhOvQ7EmW3Gk8s4ftpzRt3_-wcZ6Opd5IbRyrTpfnW5eA68RSEpl-inFi8bdKSx7-UmuBtccrx6RaJCQx6qcMGRiwh-eAXS0hsKyiTLrEZZmNGObUY9RCshSL_tmYtKsgbNIkI8K_zfh7olmdCwUoC7SWOu-Rev8o96D-wGFdnlCCul1BB7K-mE3uBF-jV0WibujXjJ6aRrlfGcKvsAM9b1iuRbYq5XItIKjTwcpjhUBYHvQqF07UYla8JSfiJGwDww.ItwjojhBX99xSgCC.Q8bVYOhKdNjgo8vZOPKU3Fo8K-JwVkaZqA4FLsER9O9Y8kZMfaovd8QlTIelvduSCTwsHsqD6aMzTcHXVUeNRNT0QWpfn-uqhAB_rgu9cVxQkIryUyLA5tGQb2bk0oM5uRtBnBfKXotPtTPSOZ24cA3zAZlLqdkTBdjgZh64atmFBPMKC_XZKmAomfBIdGaomWALByX4NphfXWPEmS_2KsUEbFIOVZxTLVVlevyy9ZxftMpLkPBZaNSFKS7uVLIhwU6iOv0UhzBTwh7C6DWlkPfG0jtYCE9fejyvuYgrrpyY0ViTlQhgO9aVnUjnBXmKatxviGfdkJM_-Io_WNYPPtV14kvHrHg6bLHiaz1tRJkvJqKthXqXhMdg2otb_XTS8-KUUf2DAS6CBTSa6fiRr1yVLse-rskYL8B39c23PPTBvTAc09Qj4AbrMshncjzpbllzPLqGfb2FO7CEObBeS5it5VCYL_9BxEwZS12y58XblA_ASXp_Y5FMVjo4ougyC1_snRV206WD4ySxOZsbaaV_dBy-7bVJ-WENYBNf6jrtrYwr9C-6MYCuUrMTXLysBAfICx79dO9XQ7lfaeKA5msilofDJ0BkT5WE2e9Wk75HbQ-fhiB0Jb6-h2EdQfw1LESfZs4WOIigLTmv43krwSWt_6H3fqiXTfZE5UZqP44mgHhwgFdyYjh-5oX3AZUgk8t-neHg-JN4NWKkdR8eUAWoAlvQjQ2nrxonLztT4MXLOAkdumsnA1olWNwX0_WUGHXHrZswPFDu4jRDiAy1WAWZi2drmWwPoZ_LxMnQx5OxWGuWmhTUL9Iu0G6u-5RfwWWwJx5yfkdMmCjI-FOW1Hr1nMrLCs9zaOfOlSUmU3BoELBAoXziNX7qOlpAibjM_y3fANkNChBnLS_NVfPPykVh5yS1ebUxrgjqhDLc7qZ-g9zNC38Ve0yv6nbnnjw8JZ1G-pOMtZ-zdAf-TFMAmSQMt0W9sz_JhX7Il6Xao_M9QDOXUQopYcptX3V3-gstHRgsq7FDQOo-Kpq6tRDOuO4l7R1Ck3uDmoqP7UvskWGCJoL0PYTR3ahWvwdztXqhNeJUf1sUH7sJREOXaTIckIUagjZ8-rz51-Tvcc19SWfP8mZgi0baybubIaV7Z9NxQhOIIp8pmwKk2vm1NmxNcLO0yyXA8pZX77g7PDKCwD3W0Da0uSAtkrDumkuIZmps_4aMwP727E-0oTxhVMyBvYkSeFbrHoxRcqmPTVF2dy6MP_o53NcJ11rNCNHFLeQCMkHHjn9zNE317gV5OtDhIak1ptUJXi8ECiVFpS8jCneWRegvNgHkcCv7Xw.a4a1m1eTVjsaWSReYxi92g',
        'CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.e5fc2c0e-2e28-4750-810d-90c0574b85d3.userData': '{"PreferredMfaSetting":"SMS_MFA","UserAttributes":[{"Name":"sub","Value":"a440ee46-5c35-49cc-b6ce-dfc40422823b"},{"Name":"email_verified","Value":"true"},{"Name":"phone_number_verified","Value":"true"},{"Name":"phone_number","Value":"+13152819168"},{"Name":"preferred_username","Value":"apptester"},{"Name":"given_name","Value":"apptester"},{"Name":"family_name","Value":"apptester"},{"Name":"email","Value":"xofivi5642@laklica.com"}],"UserMFASettingList":["SMS_MFA"],"Username":"e5fc2c0e-2e28-4750-810d-90c0574b85d3"}',
        'CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.LastAuthUser' :'e5fc2c0e-2e28-4750-810d-90c0574b85d3'
    };
    setDomainLocalStorage(browser, url, localStorage);
    
    const page = await browser.newPage();
    await page.goto(url);
    // do your actual puppeteer things now
})();
  
  const setDomainLocalStorage = async (browser, url, values) => {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', r => {
      r.respond({
        status: 200,
        contentType: 'text/plain',
        body: 'tweak me.',
      });
    });
    await page.goto(url);
    await page.evaluate(values => {
      for (const key in values) {
        localStorage.setItem(key, values[key]);
      }
    }, values);
    await page.close();
  };

//amplify-signin-with-hostedUI
//false

//CognitoIdentityId-us-east-1:27d0bb9c-b563-497b-ad0f-82b0ceb9eb0c
//us-east-1:e814ad4a-1a88-4a35-992b-cd9288c53c9d

//CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.e5fc2c0e-2e28-4750-810d-90c0574b85d3.accessToken
//eyJraWQiOiJBXC9zcE16UVpXeVc5ME9uOWgrcEVvczJ4TG1LOEpOYXFvNmJQMEkrZWJIbz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhNDQwZWU0Ni01YzM1LTQ5Y2MtYjZjZS1kZmM0MDQyMjgyM2IiLCJjb2duaXRvOmdyb3VwcyI6WyJVU0VSIl0sImV2ZW50X2lkIjoiNGQxMDYxMDAtZjU3Zi00ZjU4LTgzNDQtMWFiZWRkYzA5YmQ0IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTYxMjIwMDg3NiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfcmdjTWRoWDVUIiwiZXhwIjoxNjEyMjA0NDc2LCJpYXQiOjE2MTIyMDA4NzYsImp0aSI6IjkwMDdlMjEyLWFkMTYtNGIxYy04ZGE2LTRkNGE0YWM2MTM0MCIsImNsaWVudF9pZCI6IjQ1ZGYxZ2gxbmp2anFycjNoaXZhMm1uaDNiIiwidXNlcm5hbWUiOiJlNWZjMmMwZS0yZTI4LTQ3NTAtODEwZC05MGMwNTc0Yjg1ZDMifQ.h75bmYXBaQZ5qd5LpdN_04CWrKsAvI8DITknrY_cUxh7OksjzDvos4OiW5VSF54MVft6YZRxV0ESwAUx_te43VXTCRBbwxiq5WuAlqtygEtYNgZlxiFKA4eKWHiiOum4swBkQn-wVroVX7x60F69PR-IOvuHxcI--ttth6GvoPuAsQSVhrbHSCPOZ7b9SMpp75cCshGpyycCAoZs-G0vIWbLICQIi85ulJmALGFRUmggR_PKRXKHn405o2TKl5iQ9GWdAB3ZpA-CKH7dr0Zz0H-G5Br085uxCgjBVGQQ3d0F9BrXrzHftB6bDhykrq4jQyMcyIf1BHM7XUKIa4F8sw

//CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.e5fc2c0e-2e28-4750-810d-90c0574b85d3.clockDrift
//-21

//CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.e5fc2c0e-2e28-4750-810d-90c0574b85d3.idToken
//eyJraWQiOiJud0V1Vm1IQkdjVk5mc3NhTlZOaTlyNGZpM1RcL1pVQkhcL2s2XC9qRmtmQ1RzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhNDQwZWU0Ni01YzM1LTQ5Y2MtYjZjZS1kZmM0MDQyMjgyM2IiLCJjb2duaXRvOmdyb3VwcyI6WyJVU0VSIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9yZ2NNZGhYNVQiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsImNvZ25pdG86dXNlcm5hbWUiOiJlNWZjMmMwZS0yZTI4LTQ3NTAtODEwZC05MGMwNTc0Yjg1ZDMiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcHB0ZXN0ZXIiLCJnaXZlbl9uYW1lIjoiYXBwdGVzdGVyIiwiYXVkIjoiNDVkZjFnaDFuanZqcXJyM2hpdmEybW5oM2IiLCJldmVudF9pZCI6IjRkMTA2MTAwLWY1N2YtNGY1OC04MzQ0LTFhYmVkZGMwOWJkNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjEyMjAwODc2LCJwaG9uZV9udW1iZXIiOiIrMTMxNTI4MTkxNjgiLCJleHAiOjE2MTIyMDQ0NzYsImlhdCI6MTYxMjIwMDg3NiwiZmFtaWx5X25hbWUiOiJhcHB0ZXN0ZXIiLCJlbWFpbCI6InhvZml2aTU2NDJAbGFrbGljYS5jb20ifQ.dS-RrX6uiavy--qlCei7xP_GgLSFtCgIGXpQM2TrXRDIy9Q0mvIjUJX3UAcCStqZyPW9n4fi8x-_mSltk4Eq3bub0yfxVq7ymcSHc53E2X8foiHqjl4AsN2_W2MZvlHN4-jxDG4QjbjrfKFKJkbbuwu0uXQNt9IbBj8f1sKVWMcNidijJup1bBM0pLcZpANp_oX1sVg89rtwIqOhz5YbwWCHngJ3YlUqL-uFPtXmcLjUUctuXMdIXNNK5hxQuRRk9_kQBKotmu7OzBoTMqjpIdGOkjjargD8GmYh-2ttilKAsffBw0HrfpUutZqSz6TIZJUWGctwtISJ4nqsACKpsw

//CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.e5fc2c0e-2e28-4750-810d-90c0574b85d3.refreshToken
//eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.F_eiUjx0tfoDBRuytF_tXkR0urvtKZthiduFoSxhXH8hYQMJOBtI-FBUt4DUVvM_usl4q2Iz7JvIcO-wV4kdhOvQ7EmW3Gk8s4ftpzRt3_-wcZ6Opd5IbRyrTpfnW5eA68RSEpl-inFi8bdKSx7-UmuBtccrx6RaJCQx6qcMGRiwh-eAXS0hsKyiTLrEZZmNGObUY9RCshSL_tmYtKsgbNIkI8K_zfh7olmdCwUoC7SWOu-Rev8o96D-wGFdnlCCul1BB7K-mE3uBF-jV0WibujXjJ6aRrlfGcKvsAM9b1iuRbYq5XItIKjTwcpjhUBYHvQqF07UYla8JSfiJGwDww.ItwjojhBX99xSgCC.Q8bVYOhKdNjgo8vZOPKU3Fo8K-JwVkaZqA4FLsER9O9Y8kZMfaovd8QlTIelvduSCTwsHsqD6aMzTcHXVUeNRNT0QWpfn-uqhAB_rgu9cVxQkIryUyLA5tGQb2bk0oM5uRtBnBfKXotPtTPSOZ24cA3zAZlLqdkTBdjgZh64atmFBPMKC_XZKmAomfBIdGaomWALByX4NphfXWPEmS_2KsUEbFIOVZxTLVVlevyy9ZxftMpLkPBZaNSFKS7uVLIhwU6iOv0UhzBTwh7C6DWlkPfG0jtYCE9fejyvuYgrrpyY0ViTlQhgO9aVnUjnBXmKatxviGfdkJM_-Io_WNYPPtV14kvHrHg6bLHiaz1tRJkvJqKthXqXhMdg2otb_XTS8-KUUf2DAS6CBTSa6fiRr1yVLse-rskYL8B39c23PPTBvTAc09Qj4AbrMshncjzpbllzPLqGfb2FO7CEObBeS5it5VCYL_9BxEwZS12y58XblA_ASXp_Y5FMVjo4ougyC1_snRV206WD4ySxOZsbaaV_dBy-7bVJ-WENYBNf6jrtrYwr9C-6MYCuUrMTXLysBAfICx79dO9XQ7lfaeKA5msilofDJ0BkT5WE2e9Wk75HbQ-fhiB0Jb6-h2EdQfw1LESfZs4WOIigLTmv43krwSWt_6H3fqiXTfZE5UZqP44mgHhwgFdyYjh-5oX3AZUgk8t-neHg-JN4NWKkdR8eUAWoAlvQjQ2nrxonLztT4MXLOAkdumsnA1olWNwX0_WUGHXHrZswPFDu4jRDiAy1WAWZi2drmWwPoZ_LxMnQx5OxWGuWmhTUL9Iu0G6u-5RfwWWwJx5yfkdMmCjI-FOW1Hr1nMrLCs9zaOfOlSUmU3BoELBAoXziNX7qOlpAibjM_y3fANkNChBnLS_NVfPPykVh5yS1ebUxrgjqhDLc7qZ-g9zNC38Ve0yv6nbnnjw8JZ1G-pOMtZ-zdAf-TFMAmSQMt0W9sz_JhX7Il6Xao_M9QDOXUQopYcptX3V3-gstHRgsq7FDQOo-Kpq6tRDOuO4l7R1Ck3uDmoqP7UvskWGCJoL0PYTR3ahWvwdztXqhNeJUf1sUH7sJREOXaTIckIUagjZ8-rz51-Tvcc19SWfP8mZgi0baybubIaV7Z9NxQhOIIp8pmwKk2vm1NmxNcLO0yyXA8pZX77g7PDKCwD3W0Da0uSAtkrDumkuIZmps_4aMwP727E-0oTxhVMyBvYkSeFbrHoxRcqmPTVF2dy6MP_o53NcJ11rNCNHFLeQCMkHHjn9zNE317gV5OtDhIak1ptUJXi8ECiVFpS8jCneWRegvNgHkcCv7Xw.a4a1m1eTVjsaWSReYxi92g

//CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.e5fc2c0e-2e28-4750-810d-90c0574b85d3.userData
//{"PreferredMfaSetting":"SMS_MFA","UserAttributes":[{"Name":"sub","Value":"a440ee46-5c35-49cc-b6ce-dfc40422823b"},{"Name":"email_verified","Value":"true"},{"Name":"phone_number_verified","Value":"true"},{"Name":"phone_number","Value":"+13152819168"},{"Name":"preferred_username","Value":"apptester"},{"Name":"given_name","Value":"apptester"},{"Name":"family_name","Value":"apptester"},{"Name":"email","Value":"xofivi5642@laklica.com"}],"UserMFASettingList":["SMS_MFA"],"Username":"e5fc2c0e-2e28-4750-810d-90c0574b85d3"}

//CognitoIdentityServiceProvider.45df1gh1njvjqrr3hiva2mnh3b.LastAuthUser
//e5fc2c0e-2e28-4750-810d-90c0574b85d3
