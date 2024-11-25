import * as fs from 'fs';
import * as crypto from 'crypto';

function demo(appId: String, prepayid: String) {
    let nonceStr = "123123123123123123123";
    nonceStr = "5K8264ILTKCH16CQ2502SI8ZNMTM67VS"
    let timeStamp = Math.floor(Date.now() / 1000).toString();
    timeStamp = '1414561699'

    let privateKey = fs.readFileSync('file/apiclient_key.pem', 'utf8')

    let data = `${appId}\n${timeStamp}\n${nonceStr}\n${prepayid}\n`
    console.log(data)
    const signature = crypto.sign('sha256', Buffer.from(data), {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_PADDING,
    });
    console.log(signature.toString('base64'));

    let publicKey = fs.readFileSync('file/apiclient_cert.pem', 'utf8')
    const isVerified = crypto.verify(
        'sha256',
        Buffer.from(data),
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PADDING,
        },
        signature
    );
    console.log('签名验证结果:', isVerified);
}
demo("wx8888888888888888", "WX1217752501201407033233368018")