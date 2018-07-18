            if (assetImportRequested) {
                if (assetFilePath.compareTo("1") == 0) {
                    assetFilePath = "www/" + dbname;
                    try {
                        in = this.getContext().getAssets().open(assetFilePath);
                        FLog.v(TAG, "Pre-populated DB asset FOUND  in app bundle www subdirectory: " + assetFilePath);
                    } catch (Exception ex){
