require 'fileutils'  
  
@source = "./_site/categories"  
@target = "./categories"  
@includePattern = "/**/*.html"  
  
task :default => [:copyDir]  
  
task :copyDir do  
    FileUtils.rm_rf(@target)  #remove target directory (if exists)  
    FileUtils.mkdir_p(@target) #create the target directory  
    files = FileList.new().include("#{@source}#{@includePattern}");  
    files.each do |file|  
        #create target location file string (replace source with target in path)  
        targetLocation = file.sub(@source, @target)  
        #ensure directory exists  
        FileUtils.mkdir_p(File.dirname(targetLocation));  
        #copy the file  
        FileUtils.cp_r(file, targetLocation)  
    end
end