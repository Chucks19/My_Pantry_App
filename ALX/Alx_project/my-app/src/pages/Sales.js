import '../css/NavigationBar.css'

const Sales = () => {
    return ( 
        <div className="sales">
            <div class="pg-opt mb-5" style={{backgroundColor:'#eee'}}>
            <div class="container " >
            <div class="row">
            <div class="col-md-12">
            <h1 class="page-title">Property for Rent in Nigeria <span></span></h1>
            </div>
            </div>
            </div>
            </div>
            {/*  */}

            <div class="clearfix visible-xs-block"></div>
<div className="row p-4">
<div className=" text-sm-left col-8">


<div className="d-flex w-75 h-100 p-3 border rounded  text-dark justify-content-between " style={{backgroundColor:'#eee'}}>
   <div className='w-25'>
       <img className='w-100 ' src="./images/064b12d23ddb59-5-bedroom-fully-detached-duplex-with-bq-detached-duplexes-for-rent-ikota-lekki-lagos.jpeg" alt="" />
       <button className='btn btn-primary p-2 m-3 text-dark'>request Buy</button>
   </div>
   <div className='w-75 ml-5'>
   <a href=""><h4 class="content-title">3 bedroom flat / apartment for rent</h4></a>
   <address class="voffset-bottom-10"><strong><i class="fal fa-map-marker"></i> &nbsp;Off Sobo Arobiodu Street, Ikeja GRA, Ikeja, Lagos</strong></address>
<div class="description hidden-xs " itemprop="description">
   <p id="clip-text-len">
   Newly built, spacious and very well finished 8nos 3br + 1rbq flats in a preferred part of gra ikeja.
   the property has high quality finishing, and is serviced with lifts (elevators), a communal swimming pool and gymnasium, 24hr back-up solar powered electricity with tesla batteries, professional security guards plus real time cctv coverage, and adequate car-parking space.
   the property is due for completion, on or before july 31, 20...
   </p>
   <a href="">More details</a>


</div>
<span class="pull-sm-left">
   <span content="NGN" class="price">₦</span><span content="9000000.00" class="price">9,000,000</span><span class="period"> per annum</span> </span>
   <span class="pull-left">
</span>
<span class="marketed-by pull-right hidden-xs hidden-sm text-right">
   Greenhaven Properties &amp; Development Company Limited<br/>
   <strong>
   <i class="fal fa-phone fa-rotate-90"></i> &nbsp;+2348033306666 </strong>
</span>
</div>

   </div>
</div>
<div className='col-4'>
<div class=""><h2 style={{fontSize:'30px'}}><i className="fal fa-filter" ></i>&nbsp; Advanced Filter Options</h2></div>
    <div class="panel-body">
        <form name="search_jsForm" id="search_jsForm"  method="post" className="form-light">
        <div >
            <div >
                <div className="form-group">
                    <label>Location</label>
                    <div className="easy-autocomplete"><textarea data-prefix=""  placeholder="Enter a state, locality or area" data-results="all" style={{height:'56px'}} type="text" class="form-control side-panel-search propertyLocation" autoComplete="off" id="eac-7322"></textarea><div class="easy-autocomplete-container" id="eac-container-eac-7322"><ul></ul></div></div><input type="hidden" name="sid" id="sid" value="" />
                    
                     {/* <em for="propertyLocation" class="invalid hidden" id="no-location-found">Location not found</em> */}
                </div>
            </div>
        </div>
        </form>
    </div>
</div>
</div>
</div>

     );
}
 
export default Sales;