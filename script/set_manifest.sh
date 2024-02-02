#!/bin/bash

LOCAL_MANIFEST=./manifest.xml
TARGET_MANIFEST_DIR=/Users/$(id -un)/Library/Containers/com.microsoft.Word/Data/Documents/wef
TARGET_FILE_NAME=private.manifest.xml

cp -f ${LOCAL_MANIFEST} ${TARGET_MANIFEST_DIR}/${TARGET_FILE_NAME}
ls -l ${TARGET_MANIFEST_DIR}
