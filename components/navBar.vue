<template>
    <div id="header" class="d-flex row">
        <div id="logo" class="position-relative d-flex col-sm-3">
            <p>AndreiStudio</p>
        </div>
        <div class="d-flex col-sm-6 m-0 p-0">
            <div class="search-bar d-flex vertical-align">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
        </div>
        <div class=" col-sm-3 m-0 p-0 dropdown img-div">
            <div class="p-0 m-0 float-left div1">
                <a class="dropdown-toggle float-right" data-toggle="dropdown" id="dropdownbutton" aria-haspopup="true" aria-expanded="false" role="button">
                    <i class="fa fa-bell nav-icon vertical-align"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownbutton">
                    <li><a href="" class="dropdown-item">Your store has a new order for 2 items totaling $1,299.00</a></li>
                    <li><a href="" class="dropdown-item">3 new costumer account is created</a></li>
                    <li><a href="" class="dropdown-item">Your android aapplication has been approved</a></li>
                    <li><a href="" class="dropdown-item">Paypal payment method has been enabled for your store</a></li>
                </ul>
            </div>
            <div class="img">
                <a class="d-flex">
                    <div>
                        <img src="https://cdn-images.welcometothejungle.com/5DDbrp9_kdlw05Z0hzc7kYEpaaruHhUUWJqs-nW1o8k/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9jYXRlZ29yeS9jb3Zlci8yNjYwLzE1NDg4My9jb2xsZWN0aW9uX2NhdGVnb3J5X2JlaGluZF90aGVfY29kZS5qcGc" alt="image" class="img-thumbnail mw-100 mh-100 rounded-circle">
                    </div>
                    <div class="text">andrei.trache01@gmail.com</div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .div1 {
        height: 100%;    
    }
    .img {
        margin-left: 50px;
    }
    .img, .img a {
        height: 100%;
    }
    .img a{
        height: 100%;
        display: flex;
        flex: 1;
        position: relative;
        margin: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    .text1 a{
        height: 100%;
    }
    .text1 a div{
        margin: 0;
        top: 50%;
        transform: translateY(10%);
    }
    .text{ 
        font-size: 20px;
        margin-left: 5px;
        height: 100%;
        top:50%;
        transform: translateY(20%);
        color: black;
    }

    .vertical-align{
        margin: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    #logo {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #logo p {
        width: 100%;
        height: 100%;
        padding-left: 20px;
        margin: 8px 8px;
        font-weight: bold;
        font-size: 25px;
    }
    #header {
        top: 0;
        left: 0;
        right: 0;
        position: fixed;
        z-index: 2;
        background-color: rgb(255, 255, 255);
        transition: box-shadow .2s linear;
        box-shadow: 0 10px 10px #888888;
    }
    .search-bar input {
        padding: 10px;
        font-size: 17px;
        border: none;
        border-radius: 6px;
        float: left;
        width: 80%;
        background: #f1f1f1;
    }

    .search-bar button {
        float: left;
        width: 50px;
        background: #888888;
        color: white;
        border: none;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        cursor: pointer;
    }

    .search-bar {
        width: 100%;
        height: 60%;
        
    }
    .nav-icon {
        font-size: 35px;
        width: 100%;

    }
    .img-div img, p {
        width: 40px;
        height: 40px;
    }
    .img img{
       top: 50%;
       transform: translateY(20%);
    }
</style>