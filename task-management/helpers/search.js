module.exports=(query)=>{
    let objectSearch={
        keyword:"",
    }
    if(query.keyword){
        //keyword trong ngoac la 1 phan trong URL, con tren kia la mk tu khai bao
        objectSearch.keyword=query.keyword;
        const regex =new RegExp(objectSearch.keyword,"i");
        // day de xu li tim kiem theo tu khoa ,"i" la de k phan bietj hoa thuong
        objectSearch.regex=regex;
        //add vao object find o ben tren(cho dk loc i)

    }
    return objectSearch;
}