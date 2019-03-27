from rest_framework import serializers
from .models import Sale

# Sale Serializer
class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = '__all__'