
#!bin/bash

COLOR='\033[38;2;179;146;240m'
BOLD='\033[1m'
NC='\033[0m'
message="$1"
echo -e "⭐️${BOLD}${COLOR}--·--·--·- 开始上传 -·--·--·--·${NC}"

git add .
git commit -m  "$message"

git push

echo -e "⭐️${BOLD}${COLOR}--·--·--·- 上传成功 -·--·--·--··${NC}"
