from django.shortcuts import render
from django.http import HttpResponse
from .models import Product
from math import ceil

# Create your views here.

def index(request):
    products = Product.objects.all()
    context = {"product":products}
    return render(request, 'shop/index.html', context)

def cart(request):
    return render(request, 'shop/cart.html')

def checkout(request):
    return HttpResponse( "Hello, world. You're at the details index.")

def product_details(request):
    return HttpResponse( "Hello, world. You're at the details index.")

def payment(request):
    return HttpResponse("Hello, world. You're at the payment index.")
