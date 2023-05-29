from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('cart/', views.cart, name='cart'),
    path('checkout/', views.checkout, name='checkout'),
    path('product_details/', views.product_details, name='product_details'),
    path('payment/', views.payment, name='payment')
]