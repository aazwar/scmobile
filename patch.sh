#!/bin/bash

perl -i -pe 's#"www/" \+ ##' node_modules/react-native-sqlite-storage/src/android/src/main/java/org/pgsqlite/SQLitePlugin.java
perl -i -pe 's#"www/" \+ ##' node_modules/react-native-sqlite-storage/src/android-native/src/main/java/io/liteglue/SQLitePlugin.java
perl -i -pe 's#.*@"www".*;##' node_modules/react-native-sqlite-storage/src/ios/SQLite.m 
