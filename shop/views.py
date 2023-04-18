from django.shortcuts import render
from django.http import HttpResponse
from .models import Product
from math import ceil

# Create your views here.

def index(request):
    products = Product.objects.all()
    
    n = len(products)
    nSlides = ceil(n/5)
    # context = {'products': products, "slides": nSlides, "range": range(1, nSlides)}
    allProds = [[products, range(1, nSlides), nSlides], 
                [products, range(1, nSlides), nSlides]]
    context = {'allProds': allProds}
    return render(request, 'shop/index.html', context)

def cart(request):
    return HttpResponse( "Hello, world. You're at the cart index.")

def details(request):
    return HttpResponse( "Hello, world. You're at the details index.")

def payment(request):
    return HttpResponse("Hello, world. You're at the payment index.")
