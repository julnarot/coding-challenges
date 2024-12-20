export function fixPackages(packages) {
    packages = "3(454(69)4567343)3345";
    console.log(packages)
    const firstMatches= [...packages.matchAll(/\(/g)];
    const lastMatches= [...packages.matchAll(/\)/g)];
    const {index:limInf} = firstMatches[firstMatches.length - 1]
    const {index:limSup} = lastMatches[0]
    // const last= [...packages.matchAll(/\)/g)]
    //console.log(matchs[matchs.length-1])
    console.log(limInf, limSup,packages.substring(limInf,limSup+1));
    // console.log(last)
    return ''
  }
