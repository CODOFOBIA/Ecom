from django.db import models

# Create your models here.
class Product(models.Model):
    product_id = models.AutoField
    product_name = models.CharField(max_length=160)
    product_category = models.CharField(max_length=200)
    product_subcategory = models.CharField(max_length=150)
    product_pub_date = models.DateField('date published')
    product_image = models.ImageField(upload_to='shop/images', default='')
    product_desc = models.CharField(max_length=300, default="")

    def __str__(self):
        return self.product_name

class Customer(models.Model):
    customer_id = models.AutoField