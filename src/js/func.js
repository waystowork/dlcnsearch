export const selector = (domName) => {
    return document.querySelector(domName)
}

/**
 * 从给定的 URL 中提取域名部分。
 * 如果 URL 格式不正确或无法解析出域名，则返回默认值 'lzpan.com'。
 * 
 * @param {string} url - 要解析的 URL。
 * @returns {string} - 提取的域名部分或默认值 'lzpan.com'。
 */
export const matchDomain = (url) => {
    // 正则表达式匹配 URL 中的域名部分，包括协议部分
    const domainRegex = /^(https?:\/\/)?([\w.-]+)\//i;
    const match = domainRegex.exec(url);
  
    // 如果匹配成功且捕获到域名部分，则返回域名
    if (match && match.length >= 2) {
      // 如果协议部分存在，则返回完整的域名（包括协议）
      if (match[1]) {
        return match[0];
      }
      // 如果协议部分不存在，则返回域名部分
      return match[1];
    }
  
    // 如果匹配失败，则返回默认值 'lzpan.com'
    return 'https://learningtimes.cn/';
  };


// 获取顶部的分类
export const getCategories = (data) => {
    let menus = []
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key];
            menus.push({ alias: element.alias, title: element.title })

        }
    }
    return menus;
}


// 获取顶部的分类
export const getSiteByAlias = (data, alias) => {
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key];
            if (element.alias === alias) return element;
        }
    }
    return {};
}

export const isMobile = () => {
    const sUserAgent = navigator.userAgent.toLowerCase();
    return /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent);

}