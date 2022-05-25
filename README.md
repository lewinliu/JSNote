## 简易的命令行入门教程:


### Git 全局设置:



```
git config --global user.name "LLW"
git config --global user.email "10932017+liwen-liu@user.noreply.gitee.com"
```

### 创建 git 仓库:



```
mkdir js-note
cd js-note
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/liwen-liu/js-note.git
git push -u origin "master"
```

### 已有仓库?



```
cd existing_git_repo
git remote add origin https://gitee.com/liwen-liu/js-note.git
git push -u origin "master"
```
