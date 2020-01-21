class Search {
	
    constructor(){
    	this.elements=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
        this.x=55;
        
    }
	expSearch(){
    
    	if(this.elements[0]==this.x){
        	return 0;
        }else if(this.elements[0]>this.x){
        	return -1;
        }
        let i=1;
    	while(i<this.elements.length && this.elements[i]<=this.x){
        	i= i*2;
        
        }
        
        let ind= this.binarySearch(i/2,Math.min(i,this.elements.length))
        
        alert('index==='+ind);
        
    }
    
    binarySearch(s,e){
    	alert(s);
        alert(e);
        if(this.binarySearch[s]==this.x){
        	return s;
        }else if(this.binarySearch[e]==this.x){
        	return e;
        }
        
        
        if(e>=s){
        	let mid= Math.floor(s+ (e-s)/2);
            if(this.elements[mid]==this.x){
            
            	return mid;
            }else if(this.elements[mid]>this.x){
            
             	return this.binarySearch(s,mid-1);
             
            }else{
            	return this.binarySearch(mid+1,e);
            }
            
        }
        
        return -1;
        
  
    }
    
    

}

search = new Search();

search.expSearch();
