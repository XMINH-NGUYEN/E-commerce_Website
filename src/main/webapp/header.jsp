<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href='<c:url value="/resources/css/header.css"></c:url>'>
<link rel="stylesheet" href='<c:url value="/resources/css/style.css"></c:url>'>
<link rel="stylesheet" href='<c:url value="/resources/css/${param.css}.css"></c:url>'>
<script src="https://kit.fontawesome.com/dd2c1c5bd1.js" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<title>${param.title}</title>
</head>
<body>
	<header class="container-fluid g-0">
		<div class="header_main row pt-3 pt-sm-4 align-items-center g-0 px-3">
			<div class="header_bar d-md-none d-flex col-3 ps-sm-3">
				<div class="bar cursor">
					<div class="bar1"></div>
					<div class="bar2 my-1"></div>
					<div class="bar3"></div>
				</div>
			</div>
			<div class="header_logo order-md-1 col-md-5 col-6 d-flex justify-content-center 
			justify-content-md-start ps-md-4 align-items-center">
				<img alt="logo" src='<c:url value="/resources/images/logo_black.png"></c:url>'
			class="logo w-100">
			</div>
			<div class="order-md-3 header_user col-md-2 col-3 d-flex justify-content-end pe-sm-3">
				<a href="#" class="user"><i class="far fa-user"></i></a>
				<a href="#" class="cart"><i class="fa-solid fa-cart-shopping ms-2 position-relative">
				<span class="position-absolute text-white translate-middle">999</span></i></a>
			</div>
			<form action="#" class="order-md-2 header_search d-flex col-md-5 ps-md-5 ps-lg-0 col-12 mt-md-0 mt-3">
				<input class="search w-100 border-0 p-2 rounded-start">
				<button type="submit" class="position-relative align-items-center rounded-end d-flex border-0 px-4">
					<i class="fa-solid fa-magnifying-glass"></i>
				</button>				
			</form>
			<div class="header_nav col-md-12 order-md-4 mt-md-4 ps-md-4 pt-md-0 pt-5 ps-md-0 ps-4">
				<ul class="nav d-md-flex w-100 position-relative pt-md-0 pt-4">
					<li class="me-md-4 mb-md-0 mb-4"><a href="#" class="fw-bold">Home</a></li>
					<li class="me-md-4 mb-md-0 mb-4"><a href="#" class="fw-bold">Product</a></li>
					<li class="me-md-4 mb-md-0 mb-4"><a href="#" class="fw-bold">About Us</a></li>
				</ul>
				<span class="close position-absolute d-md-none d-block top-0 end-0 fs-1 me-2 cursor">+</span>
			</div>
		</div>
		<div class="header_banner border-light border-top border-bottom mt-4 border-3 position-relative">
			<div class="banner position-relative overflow-hidden w-100">
				<a href="#" class="banner_item w-100 bg-success float-start"><img src='<c:url value="/resources/images/logo_black.png"></c:url>'
				class="w-100"></a>
				<a href="#" class="banner_item w-100 bg-warning float-start"><img src='<c:url value="/resources/images/logo_black.png"></c:url>'
				class="w-100"></a>
				<a href="#" class="banner_item w-100 bg-primary float-start"><img src='<c:url value="/resources/images/logo_black.png"></c:url>'
				class="w-100"></a>
			</div>
			<div class="controller position-absolute bottom-0 start-50 translate-middle d-flex">
				<div class="controller_item mx-sm-1 controller_active"></div>
				<div class="controller_item mx-sm-1"></div>
				<div class="controller_item mx-sm-1"></div>			
			</div>
		</div>
		<script src='<c:url value="/resources/js/header.js"></c:url>'></script>
	</header>
	
